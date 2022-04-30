import {
  Input,
  OnInit,
  Directive,
  ViewContainerRef,
  TemplateRef,

} from '@angular/core';
import {Authority, Roles} from "../models/role.model";
import {LocalStoreService} from "../service/jwt.service";

@Directive({
  selector: '[ifRoles]',
})
export class IfRolesDirective implements OnInit {
  @Input() public authorities: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private localStoreService: LocalStoreService
  ) {
  }

  public ngOnInit(): void {
    // let testingRoles: Roles = {
    //   authority: null
    // }


    if (false) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }


}
