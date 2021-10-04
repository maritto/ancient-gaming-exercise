import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SecurityContextService } from '../common/services/security-context.service';
import { UrlConstants } from '../common/services/url-constants';

@Component({
  selector: 'ag-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private securityContext: SecurityContextService, private router: Router) { }

  async ngOnInit() {
    const user = await this.securityContext.currentUser.pipe(first()).toPromise();
    if (user) {
      this.router.navigate([UrlConstants.boxList]);
    }
  }

}
