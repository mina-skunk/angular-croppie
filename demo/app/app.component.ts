import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CroppieOptions } from 'croppie';
import { CroppieDirective } from '../../src/croppie.directive';
import { CroppieComponent } from '../../src/croppie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public croppieOptions: CroppieOptions = {
    boundary: { width: 512, height: 521 },
    viewport: { width: 128, height: 128 },
    showZoomer: true,
    enableOrientation: true,
    enforceBoundary: false
  };

  @ViewChild('directive')
  public croppieDirective: CroppieDirective;

  @ViewChild('component')
  public croppieComponent: CroppieComponent;

  public ngAfterViewInit() {
    this.croppieDirective.croppie.bind({ url: 'assets/angular.png' });
    this.croppieComponent.croppie.bind({ url: 'assets/angular.png' });
  }

}
