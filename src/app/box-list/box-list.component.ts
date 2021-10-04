import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { boxList, boxList_boxes_edges } from '../common/models/gql-types';
import { UrlConstants } from '../common/services/url-constants';

@Component({
  selector: 'ag-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent implements OnInit {

  boxList: (boxList_boxes_edges | null)[] | null = null;

  private gqlLoadBoxes =
    gql`query boxList {
          boxes(free: true, purchasable: true, openable: true) {
            edges {
              node {
                id
                name
                iconUrl
                cost
              }
            }
          }
        }`;

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit() {
    this.loadMore();
  }

  async loadMore() {
    const { data } = await this.apollo.query<boxList>({
      query: this.gqlLoadBoxes
    }).toPromise();
    this.boxList = data.boxes.edges;
  }

  openBox(boxId: string) {
    this.router.navigate([`${UrlConstants.boxOpen}/${boxId}`]);
  }

}
