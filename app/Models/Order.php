<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "date",
        "is_paid",
        "adresse",
        "user_id",
    ];

    public function orderDetails(): HasMany
    {
        return $this->hasMany(Order_details::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
