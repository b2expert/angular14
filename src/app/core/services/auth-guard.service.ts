import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
    
    constructor(private _authContext: AuthService, private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        // Will check if user having the login session in the storage or not
        const isAuthorize: boolean = this._authContext.token ? true: false;

        if(!isAuthorize) {
            this._router.navigate(['']);
        }

        return isAuthorize;

    }

}