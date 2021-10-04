import { Component, Input } from '@angular/core';
import { boxList_boxes_edges_node } from 'src/app/common/models/gql-types';

@Component({
  selector: 'ag-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss']
})
export class BoxCardComponent {

  @Input() box!: boxList_boxes_edges_node;

}
