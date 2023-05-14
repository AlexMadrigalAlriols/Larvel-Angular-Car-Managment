import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error = false;
  form = new FormGroup({
    code: new FormControl(null, Validators.required)
  });

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.form.invalid) {
      this.error = true;
      return;
    }

    this.userService.login(String(this.form.get('code')?.value)).subscribe((response: any) => {
      if(response.success) {
          localStorage.setItem('id', response.data.user_id);
          localStorage.setItem('token', response.data.token);
          this.authService._isLoggedIn.next(true);
          this.router.navigate(['/manager']);
      }
    });
  }
}
