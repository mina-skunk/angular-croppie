import { Directive, Input, Output, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Croppie from 'croppie';
/**
 * Basic directive for creating Coppie instance on `<img>` tag.
 */
var CroppieDirective = (function () {
    function CroppieDirective(elementRef) {
        this.element = elementRef.nativeElement;
        this.update = Observable.never();
    }
    CroppieDirective.prototype.ngAfterViewInit = function () {
        this.croppie = new Croppie(this.element, this.croppieOptions);
        this.update = Observable.fromEvent(this.element, 'update');
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
