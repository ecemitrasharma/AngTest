import { Component } from '@angular/core';
import {NavBarComponent} from './nav-bar/nav-bar.component'


@Component({
  selector: 'my-app',
  template: '<nav-bar></nav-bar>',
  
})
export class AppComponent { name = 'Angular'; }
