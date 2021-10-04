import { Subscription } from 'rxjs';

export class AutoUnsubscriber {
  private subscriptions = new Array<Subscription>();

  set addSub(newSubscription: Subscription) {
    this.subscriptions.push(newSubscription);
  }

  discard() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
