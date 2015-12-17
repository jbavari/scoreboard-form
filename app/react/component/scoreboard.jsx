import Team from './team.jsx';
import React from 'react';

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.homeTeam = {};
    this.visitorTeam = {};
    this.url = this.props.url;
    this.submit = this.submit.bind(this);
    this.updateTeam = this.updateTeam.bind(this);
    this.submitted = false;
    this.jsonPayload = null;
  }

  submit(event) {
    event.preventDefault();
    this.submitted = true;
    this.setState(this);
    this.jsonPayload = JSON.stringify({ homeTeam: this.homeTeam.toJson(), visitorTeam: this.visitorTeam.toJson()});
  }

  updateTeam(team) {
    if (team.props.home) {
      this.homeTeam = team;
    } else {
      this.visitorTeam = team;
    }
  }

  render() {
    var jsonInformation = this.submitted ? (<div>JSON payload: {this.jsonPayload}</div>) : null;
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
          {jsonInformation}
        </div>
      </form>
    )
  }
}
