import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-pretty-price',
  templateUrl: './pretty-price.component.html',
  styleUrls: ['./pretty-price.component.scss']
})
export class PrettyPriceComponent {

  @Input() total: number = 0;

}
