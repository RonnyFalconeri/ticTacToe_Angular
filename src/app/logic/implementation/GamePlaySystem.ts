import { IGamePlaySystem } from "src/app/logic/models/IGamePlaySystem";
import { TileState } from 'src/app/logic/models/TileState';
import { GameState } from 'src/app/logic/models/GameState';
import { Tile } from "src/app/logic/models/Tile";
import { ScoringSystem } from 'src/app/logic/implementation/ScoringSystem';
import { IScoringSystem } from 'src/app/logic/models/IScoringSystem';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GamePlaySystem implements IGamePlaySystem {
  private gameField: Tile[] = new Array(9);
  private gameState: GameState;
  private currentPlayer: TileState;
  private scoringSystem: IScoringSystem;

  constructor(scoringSystem: ScoringSystem) {
    this.scoringSystem = scoringSystem;
  }

  newGame() : void {
    this.currentPlayer = TileState.PLAYER_1;
    this.gameState = GameState.RUNNING;
    this.resetGameField();
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

  private checkForWin() : void {
    if(this.scoringSystem.playerHasWon(this.currentPlayer, this.gameField)) {
      this.gameState = GameState.WON;
    } else {
      this.checkForDraw();
      this.changeState();
    }
  }

  private checkForDraw() : void {
    if(this.scoringSystem.isDraw(this.gameField)) {
      this.gameState = GameState.DRAW;
    }
  }

  private changeState() : void {
    if (this.currentPlayer == TileState.PLAYER_1) {
      this.currentPlayer = TileState.PLAYER_2;
    } else if (this.currentPlayer == TileState.PLAYER_2) {
      this.currentPlayer = TileState.PLAYER_1;
    }
  }

  getGameField() : Tile[] {
    return this.gameField;
  }

  getCurrentPlayer() : TileState {
    return this.currentPlayer;
  }

  getGameState() : GameState {
    return this.gameState;
  }
}
