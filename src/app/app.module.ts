import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './main-header/login-form/login-form.component';
import { LoggedUserNavComponent } from './main-header/logged-user-nav/logged-user-nav.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CoinCounterComponent } from './common/coin-counter/coin-counter.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxCardComponent } from './box-list/box-card/box-card.component';
import { GraphQLModule } from './graphql.module';
import { OpeningBoxComponent } from './opening-box/opening-box.component';
import { PrettyPriceComponent } from './common/pretty-price/pretty-price.component';
import { BoxResultsComponent } from './opening-box/box-results/box-results.component';
import { ItemCardComponent } from './opening-box/box-results/item-card/item-card.component';
import { LoadingSpinnerComponent } from './common/loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [	
    AppComponent,
    MainHeaderComponent,
    HomepageComponent,
    LoginFormComponent,
    LoggedUserNavComponent,
    MainMenuComponent,
    CoinCounterComponent,
    BoxListComponent,
    BoxCardComponent,
    OpeningBoxComponent,
    PrettyPriceComponent,
    BoxResultsComponent,
    ItemCardComponent,
    LoadingSpinnerComponent,
      AlertComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
