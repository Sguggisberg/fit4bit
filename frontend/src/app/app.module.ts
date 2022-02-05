import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CommonsModule } from './commons/commons.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonsModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
