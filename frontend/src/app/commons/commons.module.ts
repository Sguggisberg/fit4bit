import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankSlateInformationComponent } from './blank-slate-information/blank-slate-information.component';
import { MaterialModule } from '../material/material.module';
import { Fit4bitCloseButtonComponent } from './components/fit4bit-close-button/fit4bit-close-button.component';



@NgModule({
  declarations: [
    BlankSlateInformationComponent,
    Fit4bitCloseButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BlankSlateInformationComponent
  ]
})
export class CommonsModule { }
