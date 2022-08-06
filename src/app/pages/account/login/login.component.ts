import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ILogin } from '../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInput: ILogin = {
    userName: localStorage.getItem('username') || '',
    remeberMe: localStorage.getItem('remeberMe') === 'true',
    password: '',
  };
  apiResponse: any = {};
  sending: boolean = false;

  constructor(private _accountContext: AccountService) {}

  ngOnInit(): void {}

  postLoginForm() {
    this.sending = true;
    this._accountContext.login(this.loginInput).subscribe((apiResponse) => {
      this.apiResponse = apiResponse;
      this.sending = false;

      if (this.loginInput.userName) {
        // Store username to browser storage
        localStorage.setItem('username', this.loginInput.userName);
      } else {
        localStorage.removeItem('username');
      }

      if (this.loginInput.remeberMe) {
        localStorage.setItem('remeberMe', `${this.loginInput.remeberMe}`);
      } else localStorage.removeItem('remeberMe');
    });
  }
}
