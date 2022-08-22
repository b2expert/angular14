import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/constants';
import { AuthService } from '../../../core/services/auth.service';
import { ILogin } from '../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInput: ILogin = {
    userName: localStorage.getItem(AppConstants.usernameKey) || '',
    remeberMe: localStorage.getItem(AppConstants.remeberMeKey) === 'true',
    password: '',
  };
  apiResponse: any = {};
  sending: boolean = false;

  constructor(
    private _authContext: AuthService,
    private _router: Router
    ) {}

  ngOnInit(): void {}

  postLoginForm() {
    this.sending = true;
    this._authContext.login(this.loginInput).subscribe(apiResponse => {
      this.apiResponse = apiResponse;
      this.sending = false;

      if (this.loginInput.userName) {
        // Store username to browser storage
        localStorage.setItem(AppConstants.usernameKey, this.loginInput.userName);
      } else {
        localStorage.removeItem(AppConstants.usernameKey);
      }

      if (this.loginInput.remeberMe) {
        localStorage.setItem(AppConstants.remeberMeKey, `${this.loginInput.remeberMe}`);
      } else localStorage.removeItem(AppConstants.remeberMeKey);

      // Redirect user to dashboard
      if(apiResponse && apiResponse.id) {
        this._authContext.token = apiResponse.data;
        localStorage.setItem(AppConstants.myTokenKey, apiResponse.data);
        this._router.navigate(['dashboard']);
      }
    });
  }
}
