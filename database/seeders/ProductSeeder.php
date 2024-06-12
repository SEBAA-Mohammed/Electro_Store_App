<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'id' => 1,
                'label' => 'Headphone',
                'description' => 'Wirless headphone best for outside',
                'price_bt' => 100,
                'stock' => 150,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-08 21:59:53'),
                'updated_at' => Carbon::parse('2024-06-08 21:59:54'),
            ],
            [
                'id' => 2,
                'label' => 'Macbook',
                'description' => 'Strong Pc macbook air perfect for editing',
                'price_bt' => 2500,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 2,
                'created_at' => Carbon::parse('2024-06-08 21:59:55'),
                'updated_at' => Carbon::parse('2024-06-10 17:56:19'),
            ],
            [
                'id' => 8,
                'label' => 'casque 1',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 320,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-10 17:44:24'),
                'updated_at' => Carbon::parse('2024-06-10 17:44:24'),
            ],
            [
                'id' => 9,
                'label' => 'casque 2',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 160,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-10 17:54:12'),
                'updated_at' => Carbon::parse('2024-06-10 17:54:12'),
            ],
            [
                'id' => 10,
                'label' => 'casque 3',
                'description' => 'the best headphone ever',
                'price_bt' => 160,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-10 17:54:48'),
                'updated_at' => Carbon::parse('2024-06-10 17:54:48'),
            ],
            [
                'id' => 11,
                'label' => 'casque 4',
                'description' => 'the best headphone ever',
                'price_bt' => 200,
                'stock' => 602,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-10 17:55:20'),
                'updated_at' => Carbon::parse('2024-06-10 17:55:20'),
            ],
            [
                'id' => 12,
                'label' => 'casque 5',
                'description' => 'the best headphone ever',
                'price_bt' => 160,
                'stock' => 100,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-10 17:55:47'),
                'updated_at' => Carbon::parse('2024-06-10 17:55:47'),
            ],
            [
                'id' => 13,
                'label' => 'SmartWatche1',
                'description' => 'the best headphone ever',
                'price_bt' => 120,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 5,
                'created_at' => Carbon::parse('2024-06-11 21:03:54'),
                'updated_at' => Carbon::parse('2024-06-11 21:03:54'),
            ],
            [
                'id' => 14,
                'label' => 'SmartWatche2',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 5,
                'created_at' => Carbon::parse('2024-06-11 21:04:21'),
                'updated_at' => Carbon::parse('2024-06-11 21:04:21'),
            ],
            [
                'id' => 15,
                'label' => 'VR PRO ',
                'description' => 'the best headphone ever',
                'price_bt' => 100,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 4,
                'created_at' => Carbon::parse('2024-06-11 21:04:41'),
                'updated_at' => Carbon::parse('2024-06-11 21:04:41'),
            ],
            [
                'id' => 16,
                'label' => 'casque 7',
                'description' => 'the best headphone ever',
                'price_bt' => 100,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-11 21:05:06'),
                'updated_at' => Carbon::parse('2024-06-11 21:05:06'),
            ],
            [
                'id' => 17,
                'label' => 'casque 8',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 1,
                'created_at' => Carbon::parse('2024-06-11 21:05:33'),
                'updated_at' => Carbon::parse('2024-06-11 21:05:33'),
            ],
        ]);
    }
}
