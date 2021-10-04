import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BoxDetails, BoxDetails_box, OpenBox, OpenBoxVariables, OpenBox_openBox_boxOpenings } from '../common/models/gql-types';

@Component({
  selector: 'ag-opening-box',
  templateUrl: './opening-box.component.html',
  styleUrls: ['./opening-box.component.scss']
})
export class OpeningBoxComponent implements OnInit {

  box: BoxDetails_box | undefined;
  boxResults: (OpenBox_openBox_boxOpenings | null)[] | null | undefined;
  loading = false;
  errorMessage: string | undefined;

  private gqlBoxDetails = gql`query BoxDetails($ID:ID){
    box(id:$ID){
      id
      name
      description
      price
      iconUrl
    }
  }`;

  private gqlOpenBox = gql`mutation OpenBox($input: OpenBoxInput!) {
    openBox(input: $input) {
      boxOpenings {
        id
        itemVariant {
          id
          name
          value
          iconUrl
        }
      }
    }
  }`;

  constructor(private apollo: Apollo, private router: Router, private actRouter: ActivatedRoute) { }

  async ngOnInit() {
    try {
      const { data } = await this.apollo.watchQuery<BoxDetails>({ query: this.gqlBoxDetails, variables: { ID: this.actRouter.snapshot.params.id } }).result();
      if (!data.box) {
        this.router.navigate(['']);
      } else {
        this.box = data.box;
      }
    } catch (e) {
      this.router.navigate(['']);
    }
  }

  async openBox() {
    this.loading = true;
    this.boxResults = null;
    const variables: OpenBoxVariables = {
      input: {
        boxId: this.actRouter.snapshot.params.id,
        amount: 1
      }
    };

    try {
      const { data } = await this.apollo.mutate<OpenBox>({ mutation: this.gqlOpenBox, variables: variables }).toPromise();
      this.boxResults = data?.openBox?.boxOpenings;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } catch (e: any) {
      this.loading = false;
      this.errorMessage = e.message;
      throw e;
    }
  }
}
