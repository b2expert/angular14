import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILogin } from "./models/login.interface";

@Injectable()
export class AccountService {

    constructor(private _httpClient: HttpClient) {

    }

    login(input: ILogin) {
        return this._httpClient.post('https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login', input);
    }
}