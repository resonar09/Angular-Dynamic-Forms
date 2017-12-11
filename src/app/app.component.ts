import { Component } from '@angular/core';

import { person } from './person';
import { CAD } from './models/CAD';
import { CAB } from './models/CAB';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <dynamic-form [dataObject]="object"></dynamic-form>
  `
})
export class AppComponent {
  object: any;
  title;

  constructor() {
    this.object = CAB;
    this.title = CAB.settings.title;
  }
}
