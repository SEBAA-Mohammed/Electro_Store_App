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
                'label' => 'Headphone',
                'description' => 'Wirless headphone best for outside',
                'price_bt' => 100,
                'stock' => 150,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'Macbook',
                'description' => 'Strong Pc macbook air perfect for editing',
                'price_bt' => 2500,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 2,
            ],
            [
                'label' => 'casque 1',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 320,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'casque 2',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 160,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'casque 3',
                'description' => 'the best headphone ever',
                'price_bt' => 160,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'casque 4',
                'description' => 'the best headphone ever',
                'price_bt' => 200,
                'stock' => 602,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'casque 5',
                'description' => 'the best headphone ever',
                'price_bt' => 160,
                'stock' => 100,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'SmartWatche1',
                'description' => 'the best headphone ever',
                'price_bt' => 120,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 4,
            ],
            [
                'label' => 'SmartWatche2',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 4,
            ],
            [
                'label' => 'VR PRO ',
                'description' => 'the best headphone ever',
                'price_bt' => 100,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 3,
            ],
            [
                'label' => 'casque 7',
                'description' => 'the best headphone ever',
                'price_bt' => 100,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 1,
            ],
            [
                'label' => 'casque 8',
                'description' => 'the best headphone ever',
                'price_bt' => 150,
                'stock' => 120,
                'tva' => 0.2,
                'category_id' => 1,
            ],
        ]);
    }
}
