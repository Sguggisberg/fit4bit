import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LocalStoreService} from "../service/jwt.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardSuperior implements CanActivate {


  constructor(private localStoreService:LocalStoreService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |  boolean  {

    // Check Token is valid


    // Check Role
    this.localStoreService.hasRole(
      null
    )

    return confirm('Sicher?');
  }
}

