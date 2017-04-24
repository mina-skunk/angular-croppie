import { Directive, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';
import Croppie from 'croppie';
import { CroppieOptions } from 'croppie';

/**
 * Basic directive for creating Coppie instance on `<img>` tag.
 */
@Directive({
  selector: 'img[croppieOptions]',
  exportAs: 'croppie'
})
export class CroppieDirective implements AfterViewInit, OnDestroy {

  private element: HTMLImageElement;

  public croppie: Croppie;

  @Input()
  public croppieOptions: CroppieOptions;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  public ngAfterViewInit() {
    this.croppie = new Croppie(
      this.element,
      this.croppieOptions
    );
  }

  public ngOnDestroy() {
    if (!!this.croppie) {
      this.croppie.destroy();
    }
  }

}
