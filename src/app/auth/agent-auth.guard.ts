import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { UserRole } from '../shared/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AgentAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService['getUserRole']() === UserRole.Agent) {
      return true;
    } else {
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
}