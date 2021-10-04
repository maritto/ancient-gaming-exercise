import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SecurityContextService } from '../services/security-context.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuardService implements CanActivate {

  constructor(private securityService: SecurityContextService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const user = await this.securityService.currentUser.pipe(
      first())
      .toPromise();

    if (user) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
