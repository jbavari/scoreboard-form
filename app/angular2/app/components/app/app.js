import {Component, View} from 'angular2/core';
import {Scoreboard} from '../scoreboard/scoreboard';

@Component({
  directives: [Scoreboard],
  selector: 'app',
  template: `<scoreboard></scoreboard>`
  // templateUrl: './components/app/app.html'
  // styleUrls: ['./components/app/app.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ScoreboardApp {
  constructor() {
    console.log('Constructing ScoreboardApp');
  }
}
