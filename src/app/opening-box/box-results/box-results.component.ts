import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { OpenBox_openBox_boxOpenings } from 'src/app/common/models/gql-types';

@Component({
  selector: 'ag-box-results',
  templateUrl: './box-results.component.html',
  styleUrls: ['./box-results.component.scss'],
  animations: [
    trigger('scaleUp', [
      state('start', style({
        transform: `scale(0.1)`
      })),
      state('end', style({
        transform: 'scale(1)'
      })),
      transition('start => end', [
        animate('0.3s')
      ])
    ])
  ]
})
export class BoxResultsComponent implements AfterViewInit {

  @Input() results!: (OpenBox_openBox_boxOpenings | null)[];

  open = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.open = true;
    });
  }
}
