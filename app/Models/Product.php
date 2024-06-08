<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
