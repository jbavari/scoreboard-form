import {Component, View} from 'angular2/core';

@Component({
  selector: 'app'
  // templateUrl: './components/app/app.html'
  // styleUrls: ['./components/app/app.css'],
  // encapsulation: ViewEncapsulation.None,
})
@View({
  template: `<div>Hello!</div>`
})
export class ScoreboardApp {
  constructor() {
    console.log('Constructing ScoreboardApp');
  }
}
