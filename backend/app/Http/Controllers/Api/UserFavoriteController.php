<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserFavorites\IndexRequest;
use App\Http\Requests\UserFavorites\StoreRequest;
use App\Http\Services\ApiResponse;
use App\Models\Car;
use App\Models\UserFavorite;
use Illuminate\Http\Request;

class UserFavoriteController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function index(IndexRequest $request)
    {
        $request = $request->validated();
        
        $user_f = UserFavorite::where("user_id", $request["user_id"])->get();

        foreach ($user_f as $idx => $favorite) {
            $user_f[$idx]["car"] = $favorite->car;
        }

        return ApiResponse::ok("Data Found", $user_f);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $validated = $request->validated();

        if(!UserFavorite::where("user_id", $validated["user_id"])->where("car_id", $validated["car_id"])->first()) {
            if($user_f = UserFavorite::create($validated)) {
                return ApiResponse::ok("Resource Created", $user_f);
            }
        }

        return ApiResponse::bad("Error On Create Resource");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserFavorite $user_favorite)
    {
        if($user_favorite->delete()) {
            return ApiResponse::ok("Success Deleted");
        }

        return ApiResponse::bad("Error On Delete Resource");
    }
}
