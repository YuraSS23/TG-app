import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe],
  template: `
    <h1>{{ title | uppercase}}</h1>
    <button>Change title</button>
  `
})
export class AppComponent {
  title = 'tgApp';
}
