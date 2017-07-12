import { AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Croppie from 'croppie';
import { CroppieOptions } from 'croppie';
/**
 * Basic directive for creating Coppie instance on `<img>` tag.
 */
export declare class CroppieDirective implements AfterViewInit, OnDestroy {
    private element;
    croppie: Croppie;
    croppieOptions: CroppieOptions;
    update: Observable<Croppie>;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
