# angular-croppie-module

Angular 2+ module for using [Croppie](https://foliotek.github.io/Croppie/).

## Getting Started

Based on @angular/cli project.

```bash
npm install --save angular-croppie-module croppie
npm install --save-dev @types/croppie
```

Add `"../node_modules/croppie/croppie.css"` to `.angular-cli.json`'s `"styles": [...]`.

## Usage

Basic directive for creating Coppie instance on `<img>` tag.

app.module.ts
```ts
import { CroppieModule } from 'angular-croppie-module';

@NgModule({
    imports: [
        CroppieModule
    ]
})
export class AppModule { }
```

app.component.html
```html
<img #croppie="croppie" [croppieOptions]="croppieOptions" (update)="handleUpdate($event)" />
```

app.component.ts
```ts
import * as Croppie from 'croppie';
import { CroppieDirective } from 'angular-croppie-module';

@Component({
    ...
})
export class AppComponent implements AfterViewInit {

    public croppieOptions: Croppie.CroppieOptions = {
        // https://foliotek.github.io/Croppie/#documentation Options
        ...options
    };

    @ViewChild('croppie')
    public croppieDirective: CroppieDirective;

    public ngAfterViewInit() {
        // https://foliotek.github.io/Croppie/#documentation Methods
        this.croppieDirective.croppie...
    }

    public handleUpdate(data) {
        // https://foliotek.github.io/Croppie/#documentation Events update
        data // -> { points: number[], zoom: number }
    }

}
```


See demo/app/croppie.component.ts for material looking croppie component.