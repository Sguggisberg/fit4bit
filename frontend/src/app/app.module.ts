import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperiorModule } from './superior/superior.module';
import { TrainerModule } from './trainer/trainer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuperiorModule,
    TrainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
