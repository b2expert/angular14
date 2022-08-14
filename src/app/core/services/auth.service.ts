import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../../pages/account/models/login.interface';
import { IUser } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: IUser;
  public get user() {
    return this._user;
  }

  constructor(private _httpClient: HttpClient) {
    this._user = { firstName: '', profilePicPath: '', role: '', userCode: '' };
  }

  login(input: ILogin) {
    return this._httpClient.post(
      'https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login',
      input
    );
  }

  loadUser() {
    const headers = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('myToken'),
      },
    };
    return this._httpClient
      .get(
        'https://ytc.beginner2expert.com/angular14/api/public/secure/user/basic/details',
        headers
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
}
