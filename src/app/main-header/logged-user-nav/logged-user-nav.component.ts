import { Component, Input } from '@angular/core';
import { Wallets_currentUser } from 'src/app/common/models/gql-types';

@Component({
  selector: 'ag-logged-user-nav',
  templateUrl: './logged-user-nav.component.html',
  styleUrls: ['./logged-user-nav.component.scss']
})
export class LoggedUserNavComponent {

  totalValue: number = 0;

  @Input() set user(user: Wallets_currentUser | null) {
    this._user = user;
    this.calculateWalletsValue();
  };
  get user() {
    return this._user;
  }
  private _user: Readonly<Wallets_currentUser | null> = null;

  calculateWalletsValue() {
    //here for simplicity im assuming all wallets even with different currencies have same value.
    this.totalValue = this._user?.wallets?.reduce((a, b) => a += b?.amount || 0, 0) || 0;
  }

}
