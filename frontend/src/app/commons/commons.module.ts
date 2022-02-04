import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { Fit4bitCloseButtonComponent } from './components/fit4bit-close-button/fit4bit-close-button.component';
import { Fit4bitSlateInformationComponent } from './components/fit4bit-slate-information/fit4bit-slate-information.component';



@NgModule({
  declarations: [
    Fit4bitCloseButtonComponent,
    Fit4bitSlateInformationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    Fit4bitSlateInformationComponent
  ]
})
export class CommonsModule { }
