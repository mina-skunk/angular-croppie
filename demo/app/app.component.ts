import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CroppieOptions } from 'croppie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public title = 'app works!';

  public croppieOptions: CroppieOptions = {
    boundary: { width: 512, height: 521 },
    viewport: { width: 128, height: 128 },
    showZoomer: true,
    enableOrientation: true,
    enforceBoundary: false
  };

  public ngAfterViewInit() {

  }

}
