<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $idsBrands = DB::table('brands')->pluck('id_brand');

        return [
            'brand_id' => fake()->randomElement($idsBrands),
            'model_name' => fake()->name(),
            'img'   => fake()->imageUrl()
        ];
    }
}
