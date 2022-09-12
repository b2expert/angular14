import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Endpoint } from 'src/app/constants';
import { AbsFilePathPipe } from 'src/app/shared/pipes/abs-file-path.pipe';
import { AppHttpService } from 'src/app/core/services/app-http.service';
import { ICustomer } from '../models';

@Injectable()
export class CustomerService {

  constructor(
    private _httpContext: AppHttpService,
    private _absFilePath: AbsFilePathPipe
    ) {
    this._customers = [];
  }

  private _customers: ICustomer[];
  public get customers() {
    return this._customers;
  }

  loadCustomerList() {
    return this._httpContext.get(`${Endpoint.customerList}?searchString=&dynamicCols=false&perPage=30&sort=ASC`)
    .pipe(catchError(error => {
      this._customers = [];
      throw new Error(error);
    }))
    .pipe(map((apiResponse: any) => {

      // TODO: Typecasting with ICustomer[] model
      this._customers = apiResponse.data as ICustomer[];

      // TODO: Updating file relative path with abs path
      this._customers.map(c => c.profilePic = this._absFilePath.transform(c.profilePic));

      return this._customers;
    }));
  }
}
