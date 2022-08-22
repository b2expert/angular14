import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/constants';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public authContext: AuthService, private _router: Router) {
  }

  ngOnInit(): void {}

  logout() {
    this.authContext.logout().subscribe((apiResponse: any) => {
      if(apiResponse && apiResponse.id > 0) {
        localStorage.removeItem(AppConstants.myTokenKey);
        this._router.navigate(['/']);
      }
    });
  }
}
