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

    logout(id_user: number) {
        return this.frameworkService.post('logout/' + id_user, null, true);
    }

    getUser(id_user: number) {
        return this.frameworkService.get('users/' + id_user, true);
    }

    getFavorites(id_user: number) {
        return this.frameworkService.post('user_favorites/list', {user_id: id_user}, true);
    }
}
