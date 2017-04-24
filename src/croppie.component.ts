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
  template: `
    <div>
      <img #croppie="croppie" [croppieOptions]="internalCroppieOptions" />
    </div>
    <md-slider *ngIf="croppieOptions.showZoomer" [ngStyle]="{'width.px': croppieOptions.boundary.width}" step="0.0001" min="0.0000" max="1.5000" [value]="zoom" (input)="onZoom($event)"></md-slider>
    <div *ngIf="croppieOptions.enableOrientation" class="rotate-container" [ngStyle]="{'width.px': croppieOptions.boundary.width, 'height.px': croppieOptions.boundary.height}">
      <button md-mini-fab id="rotate-left" (click)="rotateLeft()"><md-icon>rotate_left</md-icon></button>
      <button md-mini-fab id="rotate-right" (click)="rotateRight()"><md-icon>rotate_right</md-icon></button>
    </div>
  `,
  styles: [`
    :host {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .rotate-container {
        position: absolute;
    }

    #rotate-left {
        position: absolute;
        bottom: 16px;
        left: 16px;
        z-index: 1;
    }

    #rotate-right {
        position: absolute;
        bottom: 16px;
        right: 16px;
        z-index: 1;
    }
  `]
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
