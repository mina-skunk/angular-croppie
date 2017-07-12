import { Component, Input, ViewChild } from '@angular/core';
/**
 * Component containing Coppie instance and material design rotation buttons and slider.
 */
var CroppieComponent = (function () {
    function CroppieComponent() {
    }
    Object.defineProperty(CroppieComponent.prototype, "internalCroppieOptions", {
        get: function () {
            var ico = {};
            Object.assign(ico, this.croppieOptions);
            ico.showZoomer = false;
            return ico;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CroppieComponent.prototype, "croppie", {
        get: function () {
            return this.croppieDirective.croppie;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CroppieComponent.prototype, "zoom", {
        get: function () {
            return !!this.croppieDirective.croppie ? this.croppieDirective.croppie.get().zoom : 1;
        },
        enumerable: true,
        configurable: true
    });
    CroppieComponent.prototype.onZoom = function (change) {
        if (!!this.croppieDirective.croppie) {
            this.croppieDirective.croppie.setZoom(change.value);
        }
    };
    CroppieComponent.prototype.rotateLeft = function () {
        if (!!this.croppieDirective.croppie) {
            this.croppieDirective.croppie.rotate(-90);
        }
    };
    CroppieComponent.prototype.rotateRight = function () {
        if (!!this.croppieDirective.croppie) {
            this.croppieDirective.croppie.rotate(90);
        }
    };
    return CroppieComponent;
}());
export { CroppieComponent };
CroppieComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-croppie',
                template: "\n    <div>\n      <img #croppie=\"croppie\" [croppieOptions]=\"internalCroppieOptions\" />\n    </div>\n    <md-slider *ngIf=\"croppieOptions.showZoomer\" [ngStyle]=\"{'width.px': croppieOptions.boundary.width}\" step=\"0.0001\" min=\"0.0000\" max=\"1.5000\" [value]=\"zoom\" (input)=\"onZoom($event)\"></md-slider>\n    <div *ngIf=\"croppieOptions.enableOrientation\" class=\"rotate-container\" [ngStyle]=\"{'width.px': croppieOptions.boundary.width, 'height.px': croppieOptions.boundary.height}\">\n      <button md-mini-fab id=\"rotate-left\" (click)=\"rotateLeft()\"><md-icon>rotate_left</md-icon></button>\n      <button md-mini-fab id=\"rotate-right\" (click)=\"rotateRight()\"><md-icon>rotate_right</md-icon></button>\n    </div>\n  ",
                styles: ["\n    :host {\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: center;\n    }\n\n    .rotate-container {\n        position: absolute;\n    }\n\n    #rotate-left {\n        position: absolute;\n        bottom: 16px;\n        left: 16px;\n        z-index: 1;\n    }\n\n    #rotate-right {\n        position: absolute;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n    }\n  "]
            },] },
];
/** @nocollapse */
CroppieComponent.ctorParameters = function () { return []; };
CroppieComponent.propDecorators = {
    'croppieOptions': [{ type: Input },],
    'croppieDirective': [{ type: ViewChild, args: ['croppie',] },],
};
