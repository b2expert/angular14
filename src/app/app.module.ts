import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './core/components/layouts/account/account.component';
import { DashboardComponent } from './core/components/layouts/dashboard/dashboard.component';
import { AuthorizeDirective } from './core/directives/authorize.directive';
import { AbsFilePathPipe } from './core/pipes/abs-file-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashboardComponent,
    AbsFilePathPipe,
    AuthorizeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
