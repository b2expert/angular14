import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "../models/user.interface";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class DataResolverService implements Resolve<IUser> {

    constructor(
        private _authContext: AuthService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
        return this._authContext.loadUser();
    }
    
}