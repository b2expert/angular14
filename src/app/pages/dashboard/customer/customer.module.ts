import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: CustomerComponent}
    ])
  ]
})
export class CustomerModule { }
