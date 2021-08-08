import { Component, OnInit } from '@angular/core';
import { TileState } from 'src/app/logic/models/TileState';
import { GameState } from 'src/app/logic/models/GameState';
import { IGamePlaySystem } from 'src/app/logic/models/IGamePlaySystem';
import { GamePlaySystem } from 'src/app/logic/implementation/GamePlaySystem';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  gameStateEnum = GameState;
  tileStateEnum = TileState;
  gamePlay: IGamePlaySystem;

  constructor(gamePlay: GamePlaySystem) {
    this.gamePlay = gamePlay;
  }

  ngOnInit() : void {
    this.gamePlay.newGame();
  }
}
