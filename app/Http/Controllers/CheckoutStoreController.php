<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Order_details;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;

class CheckoutStoreController extends Controller
{
    public function __invoke(Request $request)
    {

        DB::beginTransaction();

        try {
            switch ($request->query('status')) {
                case 'initialized':
                    $this->createOrder();
                    break;
                case 'completed':
                    $this->completeOrder();
                    break;
                case 'failed':
                    $this->failOrder();
                    break;
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'An error occurred.'], 500);
        }
    }

    protected function createOrder()
    {
        Order::create([
            'adresse_livraison' => auth()->user()->adresse,
            'is_paid' => false,
            'user_id' => auth()->id(),

        ]);
    }

    protected function completeOrder()
    {
        sleep(2);

        // Fetch the latest transaction
        $response = Http::withToken(config('services.paddle.api_key'))->get('https://sandbox-api.paddle.com/transactions?order_by=created_at[DESC]');

        sleep(2);

        if ($response->successful()) {
            $transactions = $response->collect()->first();
            if (!empty($transactions) && is_array($transactions)) {
                $transaction = $transactions[0];

                // Ensure the required fields are present
                if (isset($transaction['id'], $transaction['invoice_id'])) {
                    sleep(2);

                    $order = Order::orderBy('id', 'desc')->first();

                    // Check if order exists before updating
                    if ($order) {
                        $order->update([
                            'is_paid' => true,
                            'payment_method_id' => 2,
                            'status_id' => 5,
                        ]);

                        // Create OrderDetail
                        Order_details::create([
                            'qte' => count($transaction['items']),
                            'tva' => $transaction['items'][0]['price']['custom_data']['tva'],
                            'prix' => (int) round($transaction['details']['totals']['total'], 2),
                            'paddle_transaction_id' => $transaction['id'],
                            'paddle_invoice_id' => $transaction['invoice_id'],
                            'order_id' => $order->id,
                            'product_id' => 5,
                        ]);
                    } else {
                        Log::error('No order found to update.');
                    }
                } else {
                    Log::error('Transaction ID or Invoice ID is missing in the response.');
                }
            } else {
                Log::error('Transactions array is empty or invalid.');
            }
        } else {
            Log::error('Failed to fetch transactions from Paddle API.');
        }
    }

    protected function failOrder()
    {
        $order = Order::latest()->first();
        $order->update([
            'is_paid' => false,
            'payment_method_id' => 1,
            'status_id' => 4,
        ]);
    }
}
