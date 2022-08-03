import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './core/components/layouts/account/account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { pageTitle: "Account Master Page" },
    children: [
      {
        path: 'login',
        data: { pageTitle: "Login Page" },
        loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'forgot-password',
        data: { pageTitle: "Forgot Password Page" },
        loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
