import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Wallets_currentUser } from 'src/app/common/models/gql-types';

@Component({
  selector: 'ag-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Input() set user(user: Wallets_currentUser | null) {
    this._user = user;
    this.cdr.markForCheck();
  };
  get user() {
    return this._user;
  }
  private _user: Readonly<Wallets_currentUser | null> = null;

  constructor(private cdr: ChangeDetectorRef) { }

  logout() {
    window.location.assign(`https://api-staging.csgoroll.com/logout?redirectUri=${window.location}`);
  }

  login() {
    window.location.assign(`https://api-staging.csgoroll.com/auth/steam?redirectUri=${window.location}`);
  }

}
