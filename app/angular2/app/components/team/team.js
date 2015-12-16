import {Component, EventEmitter, Output} from 'angular2/core';
import {NgFor, NgIf, NgModel} from 'angular2/common';


@Component({
  directives: [NgFor, NgIf, NgModel],
  inputs: ['onChange'],
  selector: 'team',
  template: `
    <div *ngIf="name == ''">
      No team set
      <input type="text" [(ngModel)]="nameInput" placeholder="Enter a name"/>
      <button type="submit" (click)="setName()">Set name</button>
    </div>
    <div *ngIf="name != ''">
      <h2>{{name}}</h2>
      <button (click)="touchdown($event)">Touchdown</button>
      <button (click)="fieldGoal($event)">Field Goal</button>
      Score: {{score}}
    </div>
    `
    }
})
export class Team {
  @Output() updateTeam = new EventEmitter<Team>();
  constructor() {
    this.nameInput = '';
    this.name = '';
    this.score = 0;
  }

  fieldGoal(e) {
    e.preventDefault();
    this.score += 3;
  }

  touchdown(e) {
    e.preventDefault();
    this.score += 7;
  }

  setName(nameInput) {
    this.name = this.nameInput;
    this.nameInput = '';
    if(this.updateTeam) {
      this.updateTeam.next(this);
    }
  }

  toJson() {
    return { name: this.name, score: this.score };
  }
}
