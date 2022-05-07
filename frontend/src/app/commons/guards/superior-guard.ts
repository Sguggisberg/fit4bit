import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../service/jwt.service';
import { Injectable } from '@angular/core';
import { Roles } from '../models/role.model';
import { Authority } from '../dto/role-dto.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardSuperior implements CanActivate {
  constructor(private localStoreService: LocalStoreService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const neededRoles: Authority[] = ['ROLE_SUPERIOR'];
    const role: Roles = {
      authority: neededRoles,
    };

    // Check Role
    return this.localStoreService.hasAtLeastOneRole(role);
  }
}
