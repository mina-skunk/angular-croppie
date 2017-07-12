import { Directive, AfterViewInit, OnDestroy, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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

  @Output()
  public update: Observable<Croppie>;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
    this.update = Observable.never();
  }

  public ngAfterViewInit() {
    this.croppie = new Croppie(
      this.element,
      this.croppieOptions
    );
    this.update = Observable.fromEvent(this.element, 'update');
  }

  public ngOnDestroy() {
    if (!!this.croppie) {
      this.croppie.destroy();
    }
  }

}
