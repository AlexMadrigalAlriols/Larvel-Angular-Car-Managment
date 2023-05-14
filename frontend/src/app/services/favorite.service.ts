import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FrameworkService } from './framework.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

    constructor(private frameworkService: FrameworkService) { }

    favoriteCar(id_user: number, id_car: number) {
        return this.frameworkService.post('user_favorites', { user_id: id_user, car_id: id_car }, true);
    }

    unfavoriteCar(id_favorite: number) {
        return this.frameworkService.delete('user_favorites/' + id_favorite, true);
    }
}
