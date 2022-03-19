import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankSlateInformationComponent } from './blank-slate-information/blank-slate-information.component';
import { MaterialModule } from '../material/material.module';
import { Fit4bitCloseButtonComponent } from './components/fit4bit-close-button/fit4bit-close-button.component';
import { LoaderComponent } from './loader/loader.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  declarations: [
    BlankSlateInformationComponent,
    Fit4bitCloseButtonComponent,
    LoaderComponent,
    OverlayComponent,
    BackdropComponent

  ],
  imports: [CommonModule, MaterialModule],
  exports: [BlankSlateInformationComponent,  LoaderComponent, OverlayComponent, BackdropComponent],
})
export class Fit4BitCommonsModule{}
