import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FrameworkService } from './framework.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

    constructor(private frameworkService: FrameworkService) { }

    getCarList() {
        return this.frameworkService.post('brands/list', {}, true);
    }
}
