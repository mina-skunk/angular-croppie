import { AfterViewInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import Croppie from 'croppie';
import { CroppieOptions } from 'croppie';
/**
 * Basic directive for creating Coppie instance on `<img>` tag.
 */
export declare class CroppieDirective implements AfterViewInit, OnDestroy {
    private element;
    croppie: Croppie;
    croppieOptions: CroppieOptions;
    update: EventEmitter<Croppie>;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
