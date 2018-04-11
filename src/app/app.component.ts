import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as Croppie from 'croppie';
import { CroppieDirective } from 'angular-croppie-module';
import { CroppieComponent } from './croppie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public croppieOptions: Croppie.CroppieOptions = {
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

  public handleUpdate(data) {
    console.dir(data);
  }

}
