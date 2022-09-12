import { IValidation } from "./validation.interface";

export interface IColDef {
  attrName: 'CUST_NAME';
  displayTitle: 'Customer Name';
  pinned: false;
  width: null;
  draggable: false;
  editable: true;
  validation: IValidation;
}
