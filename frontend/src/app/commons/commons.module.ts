import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankSlateInformationComponent } from './blank-slate-information/blank-slate-information.component';
import { MaterialModule } from '../material/material.module';
import { Fit4bitCloseButtonComponent } from './components/fit4bit-close-button/fit4bit-close-button.component';
import { LoaderComponent } from './loader/loader.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { CheckboxCardComponent } from './components/checkbox-card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ImageUploaderComponent } from './pages/image-uploader/image-uploader.component';
import { MainContentContainerComponent } from './shared/main-content-container/main-content-container.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    BlankSlateInformationComponent,
    Fit4bitCloseButtonComponent,
    LoaderComponent,
    OverlayComponent,
    BackdropComponent,
    CheckboxCardComponent,
    ButtonComponent,
    ImageUploaderComponent,
    MainContentContainerComponent,
    LoginComponent,
    WelcomePageComponent,

  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],

  exports: [
    BlankSlateInformationComponent,
    LoaderComponent,
    OverlayComponent,
    BackdropComponent,
    CheckboxCardComponent,
    ButtonComponent,
    MainContentContainerComponent,
  ],
})
export class Fit4BitCommonsModule {}
