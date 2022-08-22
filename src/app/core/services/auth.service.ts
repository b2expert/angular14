import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { AppConstants } from 'src/app/constants';
import { ILogin } from '../../pages/account/models/login.interface';
import { IUser } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _headers = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem(AppConstants.myTokenKey),
    },
  };

  private _user: IUser;
  public get user() {
    return this._user;
  }

  private _token: string;
  public get token() {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }

  constructor(private _httpClient: HttpClient) {
    this._user = { firstName: '', profilePicPath: '', role: '', userCode: '' };
    this._token = localStorage.getItem(AppConstants.myTokenKey) || '';
  }

  login(input: ILogin) {
    return this._httpClient.post(
      'https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login',
      input
    );
  }

  loadUser() {
    return this._httpClient
      .get(
        'https://ytc.beginner2expert.com/angular14/api/public/secure/user/basic/details',
        this._headers
      )
      .pipe(delay(2000))
      .pipe(
        map((apiResponse: any) => {
          this._user = {
            ...apiResponse.data,
            profilePicPath: apiResponse.data.profilePic,
            role: apiResponse.data.roleName
          };

          return this._user;
        })
      );
  }

  logout() {
    return this._httpClient.get('https://ytc.beginner2expert.com/angular14/api/public/secure/user/logout', this._headers);
  }
}
