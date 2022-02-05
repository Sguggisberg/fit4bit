import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankSlateInformationComponent } from './blank-slate-information/blank-slate-information.component';
import { MaterialModule } from '../material/material.module';
import { Fit4bitCloseButtonComponent } from './components/fit4bit-close-button/fit4bit-close-button.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SideComponent } from './navigation/side/side.component';
import { MainComponent } from './navigation/main/main.component';



@NgModule({
  declarations: [
    BlankSlateInformationComponent,
    Fit4bitCloseButtonComponent,
    HeaderComponent,
    SideComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    BlankSlateInformationComponent,HeaderComponent
  ]
})
export class CommonsModule { }
