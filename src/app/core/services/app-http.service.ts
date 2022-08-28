import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConstants } from "src/app/constants";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class AppHttpService {

    private _headers = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(AppConstants.myTokenKey),
        },
      };
      
    constructor(private _httpClient: HttpClient) {}

    public get(relativeUrl: string) {
        const url: string = environment.baseApi + relativeUrl;
        this._headers.headers.Authorization = 'Bearer ' + localStorage.getItem(AppConstants.myTokenKey);
        return this._httpClient.get(url, this._headers);
    }
    
    public post(relativeUrl: string, data: any) {
        const url: string = environment.baseApi + relativeUrl;
        this._headers.headers.Authorization = 'Bearer ' + localStorage.getItem(AppConstants.myTokenKey);
        return this._httpClient.post(url, data, this._headers);
    }
}