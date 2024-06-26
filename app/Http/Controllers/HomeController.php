<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $user = Auth::user();

        return Inertia::render('Welcome', [
            "categories" => $categories,
            "auth" => [
                "user" => $user
            ]
        ]);
    }
}
