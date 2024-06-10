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
        $bestproducts = Product::with('images')->orderBy("price_bt")->get();
        $user = Auth::user();

        return Inertia::render('Welcome', [
            "categories" => $categories,
            "bestproducts" => $bestproducts,
            "auth" => [
                "user" => $user
            ]
        ]);
    }
}
