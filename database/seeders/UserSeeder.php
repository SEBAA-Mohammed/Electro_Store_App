<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin 1',
                'ardesse' => NULL,
                'tel' => '+212 762 416 046',
                'email' => 'admin2@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$cA80BZlqASzhFz00tpg4g.Aesyu7j/FpqfJbhyRJ8V5gY.9.cv3ii', // You might want to use Hash::make() for new passwords
                'is_admin' => 1,
                'remember_token' => NULL,
            ],
            [
                'name' => 'Client 1',
                'ardesse' => NULL,
                'tel' => '+212 762 416 046',
                'email' => 'client@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$VSOwGHTDhFPqehSYSLneHOzKUGykicfjD9v8d1js1tAqyMZ5mSoM6', // You might want to use Hash::make() for new passwords
                'is_admin' => 0,
                'remember_token' => NULL,
            ],
        ]);
    }
}
