import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FrameworkService } from './framework.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private frameworkService: FrameworkService) { }

    login(code: string) {
        return this.frameworkService.post('login', { code }, false);
    }
}
