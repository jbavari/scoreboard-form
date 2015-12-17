import {Component} from 'angular2/core';
import {Team} from '../team/team';

@Component({
  directives: [Team],
  selector: 'scoreboard',
  template: `
    <form (ngSubmit)="submitScore()">
      <div class="row">
        <div class="col-md-6">
          <h2>Home Team</h2>
          <team (updateTeam)="updateHomeTeam($event)" home="true"></team>
        </div>
        <div class="col-md-6">
          <h2>Visitor Team</h2>
          <team (updateTeam)="updateVisitorTeam($event)"></team>
        </div>
      </div>
      <div class="row">
        <button type="submit">Submit</button>
      </div>
      <div *ngIf="submitted">
        JSON payload: {{jsonPayload}}
      </div>
    </form>  
  `
})
export class Scoreboard {
  homeTeam: Team = new Team();
  visitorTeam: Team = new Team();
  submitted: boolean = false;
  jsonPayload: string = null;

  constuctor() {
  }

  submitScore() {
    this.submitted = true;
    this.jsonPayload = JSON.stringify({ homeTeam: this.homeTeam.toJson(), visitorTeam: this.visitorTeam.toJson()});
  }

  updateHomeTeam(team: Team) {
    this.homeTeam = team;
  }

  updateVisitorTeam(team: Team) {
    this.visitorTeam = team;
  }
}
