import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B2EGridModule } from '@b2e/grid';
@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    B2EGridModule
  ]
})
export class SharedModule { }
