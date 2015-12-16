import Team from './team.jsx';
import React from 'react';

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.homeTeam = {};
    this.visitorTeam = {};
    // this.state = { homeTeam: this.homeTeam, visitorTeam: this.visitorTeam };
    this.url = this.props.url;
    this.submit = this.submit.bind(this);
    this.updateTeam = this.updateTeam.bind(this);
  }

  submit(event) {
    console.log('submit');
    event.preventDefault();
    console.log(this.homeTeam);
    console.log(this.visitorTeam);
  }

  updateTeam(team) {
    console.log('updateTeam', team);
    console.log('updateTeam.props.home', team.props.home);
    if (team.props.home) {
      this.homeTeam = team;
    } else {
      this.visitorTeam = team;
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="row">
          <div className="col-md-6">
            Home Team: <Team home="true" update={this.updateTeam}></Team>
          </div>
          <div className="col-md-6">
            Visitor Team: <Team update={this.updateTeam}></Team>
          </div>
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}
