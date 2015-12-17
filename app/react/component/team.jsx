import React from 'react';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.name = props.name;
    this.score = props.score || 0;
    this.setName = this.setName.bind(this);
    // this.state = {name: this.name, score: this.score};
    this.touchdown = this.touchdown.bind(this);
    this.fieldGoal = this.fieldGoal.bind(this);
  }

  fieldGoal(e) {
    e.preventDefault();
    this.score += 3;
    this.setState(this);
  }

  touchdown(e) {
    e.preventDefault();
    this.score += 7;
    this.setState(this);
  }

  setName(e) {
    e.preventDefault();
    this.name = this.refs.teamName.value;
    this.setState(this);
    this.props.update(this);
  }

  toJson() {
    return { name: this.name, score: this.score };
  }

  render() {
    if (!this.name) {
      return (
        <div>
          <h3>No team set</h3>
          <input type="text" ref="teamName" placeholder="Enter a name.." value={this.props.name}/>
          <button onClick={this.setName}>Set Name</button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{this.name}</h3>
          <button onClick={this.touchdown}>Touch Down</button>
          <button onClick={this.fieldGoal}>Field Goal</button>
          <h4>Score: {this.score}</h4>
        </div>
      );
    }
  }
}
