import { Component, ApplicationRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cards } from '../models/cards.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameStarted = false;
  cards = cards;
  players = [];
  playerForm: NgForm;
  ps = {
    player1: null,
    player2: null,
    player3: null,
    player4: null,
    player5: null,
    player6: null,
    player7: null,
    player8: null
  };

  constructor(private _appRef: ApplicationRef) { }

  onSubmit(form: NgForm) {
    this.playerForm = form;  // _.cloneDeep(form);
    Object.keys(this.ps).forEach(p => {
      if (this.ps[p]) {
        this.players.push(this.ps[p]);
      }
    });
    this.gameStarted = true;
  }

  reset() {
    this.gameStarted = false;
    this.playerForm.reset();
    this.players = [];
    Object.keys(this.ps).forEach(p => {
      delete this.ps[p];
    });
  }
}
