import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export class AuthGuardSuperior implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |  boolean  {

    // Check Token is valid


    // Check Role


    return confirm('Sicher?');
  }
}

