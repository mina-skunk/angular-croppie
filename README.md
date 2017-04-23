# angular-croppie

Angular module for using [Croppie](https://foliotek.github.io/Croppie/).

## Getting Started

Based on @angular/cli project.

```bash
npm install --save @angular/material angular-croppie hammerjs croppie
npm install --save-dev @types/hammerjs @types/croppie
```
*Note: angular-croppie not published yet.*

Add `"../node_modules/croppie/croppie.css"` to `.angular-cli.json`'s `"styles": [...]`.

## Directive (basic)

```ts
import { CroppieModule } from 'angular-croppie';

@NgModule({
    imports: [
        CroppieModule
    ]
})
export class AppModule { }
```

```html
<img #croppie="croppie" [croppieOptions]="croppieOptions" />
```

```ts
import { CroppieOptions } from 'croppie';
import { CroppieDirective } from 'angular-croppie';

@Component({
    ...
})
export class AppComponent implements AfterViewInit {

    public croppieOptions: CroppieOptions = {
        // https://foliotek.github.io/Croppie/#documentation Options
        ...options
    };

    @ViewChild('croppie')
    public croppieDirective: CroppieDirective;

    public ngAfterViewInit() {
        // https://foliotek.github.io/Croppie/#documentation Methods
        this.croppieDirective.croppie...
    }

}
```

## Component (experimental)

TODO
