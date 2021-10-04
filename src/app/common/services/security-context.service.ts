import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { OnUpdateWallet, OnUpdateWallet_updateWallet_wallet, Wallets, Wallets_currentUser, Wallets_currentUser_wallets } from '../models/gql-types';

@Injectable({
  providedIn: 'root'
})
export class SecurityContextService {

  private _currentUser = new BehaviorSubject<Readonly<Wallets_currentUser | null | undefined>>(undefined);
  get currentUser() {
    return this._currentUser.asObservable().pipe(filter(user => typeof user !== 'undefined'));
  }

  private gqlWallets = gql`query Wallets{
    currentUser {
      id,
      avatar,
      displayName,
      wallets{
        id,
        amount,
        currency
      }
    }
  }`;

  private gqlSubscribeWallets = gql`subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
      }
    }
  }`;

  constructor(private apollo: Apollo) {
    this.refreshUserData();
  }

  private async refreshUserData() {
    const { data } = await this.apollo.query<Wallets>({
      query: this.gqlWallets
    }).toPromise();

    this._currentUser.next(data.currentUser);

    if (data.currentUser) {
      this.subscribeToWalletUpdates();
    }
  }

  private async subscribeToWalletUpdates() {
    this.apollo.watchQuery({
      query: gql`{fake}`
    }).subscribeToMore<OnUpdateWallet>({
      document: this.gqlSubscribeWallets,
      updateQuery: (prev, { subscriptionData }) => {
        this.updateWallet(subscriptionData.data.updateWallet.wallet)
      }
    });
  }

  private updateWallet = (wallet: OnUpdateWallet_updateWallet_wallet | undefined) => {
    if (!wallet) { return; }

    const user: Wallets_currentUser = JSON.parse(JSON.stringify(this._currentUser.value));

    const walletIndex = user.wallets?.findIndex((w: Wallets_currentUser_wallets | null) => w?.id === wallet.id);
    if (walletIndex !== -1 && walletIndex) {
      user.wallets![walletIndex] = { ...wallet, currency: user.wallets![walletIndex]!.currency };
    }

    this._currentUser.next(user);
  }
}
