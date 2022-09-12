import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B2eGridComponent } from './components';
import { NGMatModule } from './ng-mat.module';

@NgModule({
  declarations: [
    B2eGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NGMatModule
  ],
  exports: [
    B2eGridComponent
  ]
})
export class B2EGridModule { }
