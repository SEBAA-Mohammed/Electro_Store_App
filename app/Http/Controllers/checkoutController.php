<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class checkoutController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $user = Auth::user();

        return Inertia::render('Checkout', [
            "categories" => $categories,
            "auth" => [
                "user" => $user
            ]
        ]);
    }
}
