<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('order_details')->insert([
            [
                'qty' => 1,
                'price' => 2500,
                'tva' => 0.2,
                'product_id' => 2,
                'order_id' => 1,
            ],
        ]);
    }
}
