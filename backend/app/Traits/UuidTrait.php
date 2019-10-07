<?php

namespace App\Traits;
use Webpatser\Uuid\Uuid;

trait UuidsTrait{

    /**
     * Boot function from laravel.
     */
    protected static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }
}
