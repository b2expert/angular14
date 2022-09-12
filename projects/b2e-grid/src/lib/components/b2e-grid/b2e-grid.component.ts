import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'lib-b2e-grid',
  templateUrl: './b2e-grid.component.html',
  styleUrls: ['./b2e-grid.component.scss'],
})
export class B2eGridComponent implements OnInit, OnChanges {
  @Input('cols') columnList: string[];
  @Input('rows') rowList: any[];

  constructor() {
    this.columnList = [];
    this.rowList = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {}
}
