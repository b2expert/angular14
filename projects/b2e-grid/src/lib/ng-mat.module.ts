import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [MatTableModule, MatButtonModule, MatSortModule, MatPaginatorModule],
})
export class NGMatModule {}
