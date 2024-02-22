import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe],
  template: `
    <!--<h1>{{ title | uppercase}}</h1>
    <button (click)="title='new title'">Change title</button>
    <ul>
      @for (item of items; track item) {
      <li>{{ item }}</li>
      } @if (title === 'new title') {
      <hr />
      }
    </ul>-->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'tgApp';
  items = [1,2,3,4,5]
}
