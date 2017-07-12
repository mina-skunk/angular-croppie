import { MdSliderChange } from '@angular/material';
import Croppie from 'croppie';
import { CroppieOptions } from 'croppie';
import { CroppieDirective } from './croppie.directive';
/**
 * Component containing Coppie instance and material design rotation buttons and slider.
 */
export declare class CroppieComponent {
    croppieOptions: CroppieOptions;
    readonly internalCroppieOptions: CroppieOptions;
    croppieDirective: CroppieDirective;
    readonly croppie: Croppie;
    readonly zoom: number;
    constructor();
    onZoom(change: MdSliderChange): void;
    rotateLeft(): void;
    rotateRight(): void;
}
