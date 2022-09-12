import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B2EGridModule } from '@b2e/grid';
import { AbsFilePathPipe } from './pipes/abs-file-path.pipe';
@NgModule({
  declarations: [AbsFilePathPipe],
  providers: [AbsFilePathPipe],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    B2EGridModule,
    AbsFilePathPipe
  ]
})
export class SharedModule { }
