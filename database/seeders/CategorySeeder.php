<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'label' => 'Headphones',
                'image_url' => 'products/headphone.png',
            ],
            [
                'label' => 'PC',
                'image_url' => 'products/macbook.png',
            ],
            [
                'label' => 'VR',
                'image_url' => 'products/vr.png',
            ],
            [
                'label' => 'Smart Watches',
                'image_url' => '01J01QVQ9VA1D8J595RSB7PPDY.png',
            ],
        ]);
    }
}
