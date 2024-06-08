<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "label",
        "description",
        "price_bt",
        "tva",
        "category_id",
        "stock"
    ];

    public function orderDetails(): HasMany
    {
        return $this->hasMany(Order_details::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(Product_images::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
