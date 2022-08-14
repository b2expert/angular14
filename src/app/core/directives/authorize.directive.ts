import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Directive({selector: '[authorize]'})
export class AuthorizeDirective implements AfterViewInit {
    
    @Input('authorize') allowRoles: string[];

    constructor(
        private _el: ElementRef,
        private _authContext: AuthService
    ) {
        this.allowRoles = [];
    }

    ngAfterViewInit(): void {
        // Check loggedin user role is there inside the allowRoles array or not
        const loggedinUserRole = this._authContext.user.role;
        const isAuthorize = this.allowRoles
        .findIndex(r => r === loggedinUserRole) === -1 ? false: true;

        if(!isAuthorize) {
            this._el.nativeElement.remove();
        }
    }

}