import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { AppConstants, Endpoint } from 'src/app/constants';
import { ILogin } from '../../pages/account/models/login.interface';
import { IAPIResponse } from '../models';
import { IUser } from '../models/user.interface';
import { AppHttpService } from './app-http.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
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

  constructor(private _httpClient: AppHttpService) {
    this._user = { firstName: '', profilePicPath: '', role: '', userCode: '' };
    this._token = localStorage.getItem(AppConstants.myTokenKey) || '';
  }

  login(input: ILogin): Observable<IAPIResponse> {
    return this._httpClient.post(Endpoint.login, input).pipe(
      map((apiResponse) => {
        const model = apiResponse as IAPIResponse;

        return model;
      })
    );
  }

  loadUser() {
    return this._httpClient.get(Endpoint.userDetails).pipe(
      map((apiResponse: any) => {
        this._user = {
          ...apiResponse.data,
          profilePicPath: 'https://ytc.beginner2expert.com/angular14/api/' + apiResponse.data.profilePic,
          role: apiResponse.data.roleName,
        };

        return this._user;
      })
    );
  }

  logout() {
    return this._httpClient.get(Endpoint.logout);
  }
}
