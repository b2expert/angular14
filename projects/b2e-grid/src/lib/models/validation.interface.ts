import { IDDL } from "./ddl.interface";

export interface IValidation {
    elType: string;
    options: IDDL;
    required: boolean;
    minLength: number;
    maxLength: number;
    formula: string;
    min: null;
    max: null;
  }