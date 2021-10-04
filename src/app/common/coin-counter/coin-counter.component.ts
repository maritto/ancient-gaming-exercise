import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-coin-counter',
  templateUrl: './coin-counter.component.html',
  styleUrls: ['./coin-counter.component.scss']
})
export class CoinCounterComponent {
  @Input() set total(val: number) {
    this._total = val || 0;
  }
  get total(): number {
    return this._total;
  }
  private _total: number = 0.00;

}
