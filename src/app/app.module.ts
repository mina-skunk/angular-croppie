import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { CroppieModule } from 'angular-croppie-module';

import { AppComponent } from './app.component';
import { CroppieComponent } from './croppie.component';

@NgModule({
  declarations: [
    AppComponent,
    CroppieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    CroppieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
