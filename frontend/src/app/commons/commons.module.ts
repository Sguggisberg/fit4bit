import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankSlateInformationComponent } from './blank-slate-information/blank-slate-information.component';
import { MaterialModule } from '../material/material.module';
import { Fit4bitCloseButtonComponent } from './components/fit4bit-close-button/fit4bit-close-button.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SideComponent } from './navigation/side/side.component';
import { MainComponent } from './navigation/main/main.component';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BlankSlateInformationComponent,
    Fit4bitCloseButtonComponent,
    HeaderComponent,
    SideComponent,
    MainComponent,
    LoaderComponent

  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [BlankSlateInformationComponent, HeaderComponent, LoaderComponent],
})
export class CommonsModule {}
