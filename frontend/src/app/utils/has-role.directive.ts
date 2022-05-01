import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {LocalStoreService} from "../commons/service/jwt.service";
import {Authority, Roles} from "../commons/models/role.model";

@Directive({
  selector: '[fit4bitHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input() public fit4bitHasRole: Authority[];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private localStoreService: LocalStoreService
  ) {
  }

  public ngOnInit(): void {
    const roleToCheck: Roles = {
      authority: this.fit4bitHasRole
    }
    if (this.localStoreService.hasAtLeastOneRole(roleToCheck)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
