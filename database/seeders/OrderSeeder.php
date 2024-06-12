<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('orders')->insert([
            [
                'order_date' => '2024-06-09',
                'is_paid' => 1,
                'adresse' => '14 dhar naiim',
                'user_id' => 2,
            ],
        ]);
    }
}
