import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/layouts/account/account.component';
import { DashboardComponent } from './components/layouts/dashboard/dashboard.component';
import { AuthorizeDirective } from './directives/authorize.directive';

@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    AuthorizeDirective
  ],
  exports: [
    AccountComponent,
    DashboardComponent,
    AuthorizeDirective,
    HttpClientModule,
    RouterModule
  ],
  imports: [HttpClientModule, RouterModule]
})
export class CoreModule { }
