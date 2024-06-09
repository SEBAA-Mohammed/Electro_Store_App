<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Admin 1',
            'tel' => '+212 762 416 046',
            'email' => 'admin2@gmail.com',
            'password' => Hash::make('admin1234'),
            'is_admin' => true
        ]);

        User::create([
            'name' => 'Client 1',
            'tel' => '+212 762 416 046',
            'email' => 'client@gmail.com',
            'password' => Hash::make('admin1234'),
            'is_admin' => false
        ]);
    }
}
