import { Component, ApplicationRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cards } from './models/card.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameStarted = false;
  cards = Cards;
  players = [];
  playerForm: NgForm;
  ps = {
    player1: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player2: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player3: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player4: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player5: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player6: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player7: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null },
    player8: { name: null, score: Array.apply(null, Array(11)).map(function () {}), totalScore: null }
  };

  constructor(private _appRef: ApplicationRef) { }

  onSubmit(form: NgForm) {
    this.playerForm = form;
    Object.keys(this.ps).forEach(p => {
      if (this.ps[p].name) {
        this.players.push(this.ps[p]);
      }
    });
    this.gameStarted = true;
    console.log(this.players);
  }

  calculateTotal(player: object) {
    console.log(player);
    player['totalScore'] = player['score'].reduce((c, p) => c + p);
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
