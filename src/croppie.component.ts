import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MdSliderChange } from '@angular/material';
import Croppie from 'croppie';
import { CroppieOptions } from 'croppie';
import { CroppieDirective } from './croppie.directive';

/**
 * @experimental
 */
@Component({
  selector: 'angular-croppie',
  templateUrl: './croppie.component.html',
  styleUrls: ['./croppie.component.scss']
})
export class CroppieComponent implements AfterViewInit {

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

  get zoom(): number {
    return !!this.croppieDirective.croppie ? (this.croppieDirective.croppie as any).get().zoom : 1;
  }

  // set zoom(value: number) {
  //   if (!!this.croppieDirective.croppie) {
  //     this.croppieDirective.croppie.setZoom(value);
  //   }
  // }

  constructor() { }

  public ngAfterViewInit() {
    console.dir(this.croppieDirective);
    this.croppieDirective.croppie.bind({ url: 'assets/angular.png' });
  }

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
