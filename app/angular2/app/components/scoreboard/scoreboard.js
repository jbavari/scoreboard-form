import {Component} from 'angular2/core';
import {Team} from '../team/team';

@Component({
  directives: [Team],
  selector: 'scoreboard',
  template: `
    <form (ngSubmit)="submitScore()">
      <div class="scoreboard row">
        <div class="col-md-6">
          Home Team: <team (updateTeam)="updateHomeTeam($event)" home="true" update={this.updateTeam}></team>
        </div>
        <div class="col-md-6">
          Visitor Team: <team (updateTeam)="updateVisitorTeam($event)"></team>
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
    console.log('subimtScore');
    this.submitted = true;
    this.jsonPayload = JSON.stringify({ homeTeam: this.homeTeam.toJson(), visitorTeam: this.visitorTeam.toJson()});
    // console.log('Json payload: ', JSON.stringify(jsonPayload));
  }

  updateHomeTeam(team: Team) {
    this.homeTeam = team;
  }

  updateVisitorTeam(team: Team) {
    this.visitorTeam = team;
  }
}

// export default class Scoreboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.homeTeam = {};
//     this.visitorTeam = {};
//     // this.state = { homeTeam: this.homeTeam, visitorTeam: this.visitorTeam };
//     this.url = this.props.url;
//     this.submit = this.submit.bind(this);
//     this.updateTeam = this.updateTeam.bind(this);
//   }

//   submit(event) {
//     console.log('submit');
//     event.preventDefault();
//     console.log(this.homeTeam);
//     console.log(this.visitorTeam);
//   }

//   updateTeam(team) {
//     console.log('updateTeam', team);
//     console.log('updateTeam.props.home', team.props.home);
//     if (team.props.home) {
//       this.homeTeam = team;
//     } else {
//       this.visitorTeam = team;
//     }
//   }

//   render() {
//     return (
//       <div className="scoreboard">
//         <form onSubmit={this.submit}>
//           Home Team: <Team home="true" update={this.updateTeam}></Team>
//           Visitor Team: <Team update={this.updateTeam}></Team>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
