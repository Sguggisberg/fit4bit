import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { Fit4BitCommonsModule } from './commons/commons.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { TopNavigationComponent } from './navigation/top-navigation/top-navigation.component';
import { AuthService } from './commons/service/auth.service';
@NgModule({
  declarations: [AppComponent, TopNavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    Fit4BitCommonsModule,
    MatToolbarModule,
    HttpClientModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
