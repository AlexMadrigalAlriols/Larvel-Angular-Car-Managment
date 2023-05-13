import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private userService: UserService, private router : Router) {
    const token = localStorage.getItem('token');
    this._isLoggedIn.next(!!token);
  }

  login(code: string) {
    return this.userService.login(code).subscribe((response: any) => {
        localStorage.setItem('id', response.data.user_id);
        localStorage.setItem('token', response.token);
        this._isLoggedIn.next(true);

        this.router.navigate(['/manager']);
      });
  }

  logout() {
    this._isLoggedIn.next(false);
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}