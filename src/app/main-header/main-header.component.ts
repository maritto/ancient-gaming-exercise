import { Component, OnInit } from '@angular/core';
import { Wallets_currentUser } from '../common/models/gql-types';
import { AutoUnsubscriber } from '../common/services/auto-unsubscriber.service';
import { SecurityContextService } from '../common/services/security-context.service';

@Component({
  selector: 'ag-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  user: Readonly<Wallets_currentUser | null | undefined>;

  private unsub = new AutoUnsubscriber();

  constructor(private securityContext: SecurityContextService) { }

  ngOnInit(): void {
    this.unsub.addSub = this.securityContext.currentUser.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.unsub.discard();
  }

}
