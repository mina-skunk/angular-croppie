import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MdSliderChange } from '@angular/material';
import Croppie from 'croppie';
import { CroppieOptions } from 'croppie';
import { CroppieDirective } from './croppie.directive';

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
  public croppieOptions: CroppieOptions;

  get internalCroppieOptions(): CroppieOptions {
    let ico: CroppieOptions = {};
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

  public onZoom(change: MdSliderChange) {
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
