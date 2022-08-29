import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/layouts/account/account.component';
import { DashboardComponent } from './components/layouts/dashboard/dashboard.component';
import { AuthorizeDirective } from './directives/authorize.directive';
import { AbsFilePathPipe } from './pipes/abs-file-path.pipe';

@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    AbsFilePathPipe,
    AuthorizeDirective
  ],
  exports: [
    AccountComponent,
    DashboardComponent,
    AbsFilePathPipe,
    AuthorizeDirective,
    HttpClientModule,
    RouterModule
  ],
  imports: [HttpClientModule, RouterModule]
})
export class CoreModule { }
