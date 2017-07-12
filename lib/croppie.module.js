import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdSliderModule, MdIconModule } from '@angular/material';
import { CroppieDirective } from './croppie.directive';
import { CroppieComponent } from './croppie.component';
var CroppieModule = (function () {
    function CroppieModule() {
    }
    return CroppieModule;
}());
export { CroppieModule };
CroppieModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MdButtonModule,
                    MdSliderModule,
                    MdIconModule
                ],
                declarations: [
                    CroppieDirective,
                    CroppieComponent
                ],
                exports: [
                    CroppieDirective,
                    CroppieComponent
                ]
            },] },
];
/** @nocollapse */
CroppieModule.ctorParameters = function () { return []; };
