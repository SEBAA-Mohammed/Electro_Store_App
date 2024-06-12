<?php

use App\Http\Controllers\checkoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get("/", [HomeController::class, 'index']);

Route::resource('product', ProductController::class);
Route::get('/products/{category_id}', [ProductController::class, 'getProductByCategory'])->name('productsByCategory');
Route::get('/checkout', [checkoutController::class, 'index'])->name('Checkout');

Route::get('/dashboard', function () {
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
})->middleware(['auth', 'verified'])->name('Home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
