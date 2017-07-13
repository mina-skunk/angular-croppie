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
  public update: EventEmitter<Croppie>;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
    this.update = new EventEmitter();
  }

  public ngAfterViewInit() {
    (this.croppieOptions as any).update = (data) => this.update.emit(data);
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
