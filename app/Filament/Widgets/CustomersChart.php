<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Filament\Widgets\ChartWidget;
use Carbon\Carbon;

class CustomersChart extends ChartWidget
{
    protected static ?string $heading = 'Customers Chart';

    protected static string $color = 'primary';

    protected function getData(): array
    {
        // Generate list of months from June 2023 to June 2024
        $start = Carbon::create(2023, 6, 1);
        $end = Carbon::create(2024, 6, 1);

        $months = [];
        while ($start <= $end) {
            $months[] = $start->format('Y-m');
            $start->addMonth();
        }

        // Fetch actual data
        $data = Order::query()
            ->selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, COUNT(DISTINCT user_id) as count')
            ->groupBy('month')
            ->get()
            ->keyBy('month');

        // Merge the lists
        $results = collect($months)->map(function ($month) use ($data) {
            return [
                'month' => $month,
                'count' => $data->get($month)->count ?? 0,
            ];
        });

        return [
            'datasets' => [
                [
                    'label' => 'Number of customers',
                    'data' => $results->pluck('count'),
                ],
            ],
            'labels' => $results->pluck('month'),
        ];
    }

    protected function getOptions(): array
    {
        return [
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                    'ticks' => [
                        'stepSize' => 1, // Display only whole numbers
                    ],
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
