import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroppieDirective } from './croppie.directive';
var CroppieModule = (function () {
    function CroppieModule() {
    }
    return CroppieModule;
}());
export { CroppieModule };
CroppieModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CroppieDirective
                ],
                exports: [
                    CroppieDirective
                ]
            },] },
];
/** @nocollapse */
CroppieModule.ctorParameters = function () { return []; };
