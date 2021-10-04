import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxListComponent } from './box-list/box-list.component';
import { AuthenticatedGuardService } from './common/routing-guards/authenticated-guard.service';
import { UrlConstants } from './common/services/url-constants';
import { HomepageComponent } from './homepage/homepage.component';
import { OpeningBoxComponent } from './opening-box/opening-box.component';

const routes: Routes = [
  { path: UrlConstants.boxList, component: BoxListComponent, canActivate: [AuthenticatedGuardService] },
  { path: `${UrlConstants.boxOpen}/:id`, component: OpeningBoxComponent, canActivate: [AuthenticatedGuardService] },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
