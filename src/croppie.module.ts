import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdSliderModule, MdIconModule } from '@angular/material';
import { CroppieDirective } from './croppie.directive';
import { CroppieComponent } from './croppie.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdSliderModule,
    MdIconModule
  ],
  declarations: [
    CroppieDirective,
    CroppieComponent
  ],
  exports: [
    CroppieDirective,
    CroppieComponent
  ]
})
export class CroppieModule { }
