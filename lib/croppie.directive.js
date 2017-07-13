import { Directive, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import Croppie from 'croppie';
/**
 * Basic directive for creating Coppie instance on `<img>` tag.
 */
var CroppieDirective = (function () {
    function CroppieDirective(elementRef) {
        this.element = elementRef.nativeElement;
        this.update = new EventEmitter();
    }
    CroppieDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.croppieOptions.update = function (data) { return _this.update.emit(data); };
        this.croppie = new Croppie(this.element, this.croppieOptions);
    };
    CroppieDirective.prototype.ngOnDestroy = function () {
        if (!!this.croppie) {
            this.croppie.destroy();
        }
    };
    return CroppieDirective;
}());
export { CroppieDirective };
CroppieDirective.decorators = [
    { type: Directive, args: [{
                selector: 'img[croppieOptions]',
                exportAs: 'croppie'
            },] },
];
/** @nocollapse */
CroppieDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
CroppieDirective.propDecorators = {
    'croppieOptions': [{ type: Input },],
    'update': [{ type: Output },],
};
