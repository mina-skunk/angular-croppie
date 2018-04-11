import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CroppieDirective } from './croppie.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CroppieDirective
  ],
  exports: [
    CroppieDirective
  ]
})
export class CroppieModule { }
