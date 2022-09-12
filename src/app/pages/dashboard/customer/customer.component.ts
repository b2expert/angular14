import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService, ICustomer } from 'src/app/shared';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService],
})
export class CustomerComponent implements OnInit {

  columnsToDisplay = [
    'SL', 'custName', 'mobileNo', 'DOB', 'order'
  ];
  customers$: Observable<ICustomer[]> = new Observable();

  constructor(public customerContext: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.customerContext.loadCustomerList();
  }
}
