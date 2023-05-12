<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cars\IndexRequest;
use App\Http\Requests\Cars\StoreRequest;
use App\Http\Requests\Cars\UpdateRequest;
use App\Models\Api\Car;
use App\Models\Car as ModelsCar;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexRequest $request)
    {
        $models = ModelsCar::get();

        return response()->json([
            "success" => true,
            "data" => $models
        ], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        if($car = Car::create($request->validated())) {
            return response()->json([
                "success" => true,
                "id" => $car->id
            ], Response::HTTP_OK);
        }

        return response()->json([
            "success" => false,
            "message" => trans(["Error On Create Resource"])
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Display the specified resource.
     */
    public function show(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Car $car)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Car $car)
    {
        if($car->delete()) {
            return response()->json([
                "success" => true
            ], Response::HTTP_OK);
        }

        return response()->json([
            "success" => false,
            "message" => trans(["Error On Delete Selected Resource"])
        ], Response::HTTP_BAD_REQUEST);
    }
}
