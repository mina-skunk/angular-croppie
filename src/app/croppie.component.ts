import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import * as Croppie from 'croppie';
import { CroppieDirective } from 'angular-croppie-module';

/**
 * Component containing Coppie instance and material design rotation buttons and slider.
 */
@Component({
  selector: 'angular-croppie',
  templateUrl: './croppie.component.html',
  styleUrls: ['./croppie.component.scss']
})
export class CroppieComponent {

  @Input()
  public croppieOptions: Croppie.CroppieOptions;

  get internalCroppieOptions(): Croppie.CroppieOptions {
    const ico: Croppie.CroppieOptions = {};
    Object.assign(ico, this.croppieOptions);
    ico.showZoomer = false;
    return ico;
  }

  @ViewChild('croppie')
  public croppieDirective: CroppieDirective;

  get croppie(): Croppie {
    return this.croppieDirective.croppie;
  }

  get zoom(): number {
    return !!this.croppieDirective.croppie ? (this.croppieDirective.croppie as any).get().zoom : 1;
  }

  constructor() { }

  public onZoom(change: MatSliderChange) {
    if (!!this.croppieDirective.croppie) {
      this.croppieDirective.croppie.setZoom(change.value);
    }
  }

  public rotateLeft() {
    if (!!this.croppieDirective.croppie) {
      this.croppieDirective.croppie.rotate(-90);
    }
  }

  public rotateRight() {
    if (!!this.croppieDirective.croppie) {
      this.croppieDirective.croppie.rotate(90);
    }
  }

}
