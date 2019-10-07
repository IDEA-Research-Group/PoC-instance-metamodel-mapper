<?php

use Faker\Generator as Faker;

$factory->define(App\ProcessEngine::class, function (Faker $faker) {
    return [
        'name'          => $faker->name,
        'description'   => $faker->realText($maxNbChars = 70),
    ];
});
