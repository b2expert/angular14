import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { MaterialModule } from 'src/app/shared';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        // title: 'Login Page'
      },
    ]),
  ],
  providers: [AuthService]
})
export class LoginModule {}
