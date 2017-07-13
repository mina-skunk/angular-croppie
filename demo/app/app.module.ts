import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MdButtonModule, MdSliderModule, MdIconModule } from '@angular/material';
import { CroppieModule } from '../../src/croppie.module';
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
    MdButtonModule,
    MdSliderModule,
    MdIconModule,
    CroppieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
