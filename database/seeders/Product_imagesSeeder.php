<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Product_imagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('product_images')->insert([
            [
                'image_url' => 'products/headphone.png',
                'product_id' => 1,
            ],
            [
                'image_url' => 'products/p-2.jpg',
                'product_id' => 1,
            ],
            [
                'image_url' => 'products/p-3.jpg',
                'product_id' => 1,
            ],
            [
                'image_url' => 'products/macbook.png',
                'product_id' => 2,
            ],
            [
                'image_url' => 'products/p-5.jpg',
                'product_id' => 2,
            ],
            [
                'image_url' => 'products/01J01QEEY17ZNJWMABX4FGR7GF.jpg',
                'product_id' => 8,
            ],
            [
                'image_url' => 'products/01J01R0D2ZVZ698R7EK9R4ZAXQ.jpg',
                'product_id' => 9,
            ],
            [
                'image_url' => 'products/01J01R1GZA74CE4EYC3BTYS2NG.jpg',
                'product_id' => 10,
            ],
            [
                'image_url' => 'products/01J01R2G50GZE0J2J44FNYQX2W.jpg',
                'product_id' => 11,
            ],
            [
                'image_url' => 'products/01J01R3AR89NC8MGTNAPR79RSJ.jpg',
                'product_id' => 12,
            ],
            [
                'image_url' => 'products/01J04N8FHQP6KY5GDVQ2FF7YTS.png',
                'product_id' => 13,
            ],
            [
                'image_url' => 'products/01J04N9S6ZGHSMAN9SQRYT5CW6.png',
                'product_id' => 14,
            ],
            [
                'image_url' => 'products/01J04NBY11KATWF79KPFNVGC3Q.png',
                'product_id' => 15,
            ],
            [
                'image_url' => 'products/01J04NEZE7KH4E2AWV7400Z1V1.jpg',
                'product_id' => 16,
            ],
            [
                'image_url' => 'products/01J04NFXEA5YSMXFJQTCKC7W86.jpg',
                'product_id' => 17,
            ],
        ]);
    }
}
