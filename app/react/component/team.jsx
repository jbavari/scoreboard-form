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
  }

  fieldGoal() {
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

  render() {
    if (!this.name) {
      return (
        <div>
          <input type="text" ref="teamName" placeholder="Enter a name.." value={this.props.name}/>
          <button onClick={this.setName}>Set Name</button>
        </div>
      );
    } else {
      return (
        <div>
          <span>{this.name} - Score: {this.score}</span>
          <button onClick={this.touchdown}>Touch Down</button>
          <button onClick={() => this.fieldGoal()}>Field Goal</button>
        </div>
      );
    }
  }
}
