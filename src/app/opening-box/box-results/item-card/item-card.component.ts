import { Component, Input } from '@angular/core';
import { OpenBox_openBox_boxOpenings } from 'src/app/common/models/gql-types';

@Component({
  selector: 'ag-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() item!: OpenBox_openBox_boxOpenings;

}
