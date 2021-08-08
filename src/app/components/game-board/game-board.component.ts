import { Component, OnInit } from '@angular/core';
import { TileState } from 'src/app/logic/models/TileState';
import { GameState } from 'src/app/logic/models/GameState';
import { Tile } from 'src/app/logic/models/Tile';
import { ScoringSystem } from 'src/app/logic/ScoringSystem';
import { IScoringSystem } from 'src/app/logic/models/IScoringSystem';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public gameStateEnum = GameState;
  public tileStateEnum = TileState;
  public gameState: GameState;
  public currentPlayer: TileState;
  public gameField: Tile[] = new Array(9);
  private scoringSystem: IScoringSystem;

  constructor() {}

  ngOnInit() : void {
    this.newGame();
  }

  newGame() : void {
    this.currentPlayer = TileState.PLAYER_1;
    this.gameState = GameState.RUNNING;
    this.resetGameField();
    this.scoringSystem = new ScoringSystem(this.gameField);
  }

  private resetGameField() : void {
    for(var i=0; i<this.gameField.length; i++) {
      this.gameField[i] = new Tile(TileState.UNSET);
    }
  }

  makeMove(position: number) : void {
    if(this.gameState == GameState.RUNNING) {
      var currentTile: Tile = this.gameField[position];

      if(currentTile.getState() == TileState.UNSET) {
        currentTile.setState(this.currentPlayer);
        this.checkForWin();
      }
    }
  }

  private changeState() : void {
    if (this.currentPlayer == TileState.PLAYER_1) {
      this.currentPlayer = TileState.PLAYER_2;
    } else if (this.currentPlayer == TileState.PLAYER_2) {
      this.currentPlayer = TileState.PLAYER_1;
    }
  }

  private checkForWin() : void {
    if(this.scoringSystem.playerHasWon(this.currentPlayer)) {
      this.gameState = GameState.WON;
    } else {
      this.checkForDraw();
      this.changeState();
    }
  }

  private checkForDraw() : void {
    if(this.scoringSystem.isDraw()) {
      this.gameState = GameState.DRAW;
    }
  }
}
