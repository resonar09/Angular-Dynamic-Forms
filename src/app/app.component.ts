import { Component } from '@angular/core';

import { CAD } from './models/CAD';
import { CAB } from './models/CAB';

@Component({
  selector: 'my-app',
  template: `
    <dynamic-form [dataObject]="object"></dynamic-form>
  `
})
export class AppComponent {
  object: any;
  title;

  constructor() {
    this.object = CAD;
    //this.title = CAB.settings.title;
  }
}
