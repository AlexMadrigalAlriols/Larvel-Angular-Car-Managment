<?php


namespace App\Http\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Brands\IndexRequest;
use App\Http\Requests\Brands\StoreRequest;
use App\Http\Requests\Brands\UpdateRequest;
use App\Http\Services\ApiResponse;
use App\Models\Brand;

class BrandController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index(IndexRequest $request)
    {
        $models = Brand::get();

        return ApiResponse::ok("Data Found", $models);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        if($brand = Brand::create($request->validated())) {
            return ApiResponse::ok("Resource Created", $brand);
        }

        return ApiResponse::bad("Error On Create Resource");
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        return ApiResponse::ok("Data Found", $brand);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Brand $brand)
    {
        $brand->fill($request->validated());

        if($brand->save()) {
            return ApiResponse::ok("Success Save");
        }

        return ApiResponse::bad("Error On Save Resource");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        if($brand->delete()) {
            return ApiResponse::ok("Success Deleted");
        }

        return ApiResponse::bad("Error On Delete Resource");
    }
}
