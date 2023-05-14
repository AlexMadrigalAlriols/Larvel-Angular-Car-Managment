import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dataLoaded!: Promise<boolean>;
  user_data: any;
  brands_data: any;
  
  constructor(private authService: AuthService, private userService: UserService, private carService: CarService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.userService.getUser(Number(localStorage.getItem('id'))).subscribe((response: any) => {
      if(response.success) {
        this.user_data = response.data;

        this.reloadFavoriteList();
      }
    });
  }

  reloadCarList() {
    this.carService.getCarList().subscribe((response: any) => {
      if(response.success) {
        this.brands_data = response.data;
        this.dataLoaded = Promise.resolve(true);
      }
    });
  }

  reloadFavoriteList() {
    this.userService.getFavorites(Number(localStorage.getItem('id'))).subscribe((response: any) => {
      if(response.success) {
        this.user_data.favorites = response.data;
  
        this.reloadCarList();
      }
    });
  }

  favoriteCar(id_car: number) {
    this.favoriteService.favoriteCar(Number(localStorage.getItem('id')), id_car).subscribe((response: any) => {
      if(response.success) {
        this.reloadFavoriteList();
      }
    });
  }

  unfavoriteCar(id_car: number) {
    this.favoriteService.unfavoriteCar(id_car).subscribe((response: any) => {
      if(response.success) {
        this.reloadFavoriteList();
      }
    });
  }

  is_favorite(id_car: number) {
    var fav = false;

    this.user_data.favorites.forEach((favorite: any) => {
      if(favorite.car_id == id_car) {
        fav = true;
      }
    });

    return fav;
  }

  getFavoriteByCar(id_car: number) {
    var id = 0;

    this.user_data.favorites.forEach((favorite: any) => {
      if(favorite.car_id == id_car) {
        id = favorite.id;
      }
    });

    return id;
  }

  logout() {
    this.authService.logout();
  }

}
