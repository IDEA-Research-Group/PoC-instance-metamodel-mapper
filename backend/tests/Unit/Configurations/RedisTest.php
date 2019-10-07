<?php

namespace Tests\Unit\Configurations;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RedisTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRedisWorks()
    {
        Cache::put('Laradock', 'Awesome', 10);
        $defaultValue = Cache::get('noCached', 'default');
        $value = Cache::get('Laradock');
        $this->assertTrue($defaultValue == 'default');
        $this->assertTrue(Cache::has('Laradock'));
        $this->assertTrue($value == 'Awesome');
    }
}
