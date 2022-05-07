import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { Fit4BitCommonsModule } from './commons/commons.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopNavigationComponent } from './navigation/top-navigation/top-navigation.component';
import { AuthService } from './commons/service/auth.service';
import { JwtIntercepterService } from './commons/intercepters/jwt-intercepter.service';
import { HasRoleDirective } from './utils/has-role.directive';
import { SideNavigationComponent } from './navigation/side-navigation/side-navigation.component';
import { MenuContentComponent } from './navigation/menu-content/menu-content.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HasRoleDirective,
    SideNavigationComponent,
    MenuContentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    Fit4BitCommonsModule,
    MatToolbarModule,
  ],
  exports: [HasRoleDirective],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtIntercepterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
