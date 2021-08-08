import { IScoringSystem } from 'src/app/logic/models/IScoringSystem';
import { TileState } from 'src/app/logic/models/TileState';
import { Tile } from 'src/app/logic/models/Tile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoringSystem implements IScoringSystem {

  playerHasWon(currentPlayer: TileState, gameField: Tile[]) : boolean {
    if(currentPlayer == TileState.UNSET) return false;
    if(this.playerWonByRow(currentPlayer, gameField)) return true;
    if(this.playerWonByColumn(currentPlayer, gameField)) return true;
    if(this.playerWonByDiagonale(currentPlayer, gameField)) return true;

    return false;
  }

  private playerWonByRow(currentPlayer: TileState, gameField: Tile[]) : boolean {
    let rowSize: number = 3;
    let lastRow: number = 6;

    for(let i=0; i<=lastRow; i=i+rowSize) {
      if(gameField[i].getState() == currentPlayer &&
        gameField[i+1].getState() == currentPlayer &&
        gameField[i+2].getState() == currentPlayer) {
        return true;
      }
    }
    return false;
  }

  private playerWonByColumn(currentPlayer: TileState, gameField: Tile[]) : boolean {
    let lastColumn: number = 2;

    for(let i=0; i<=lastColumn; i++) {
      if(gameField[i].getState() == currentPlayer &&
      gameField[i+3].getState() == currentPlayer &&
      gameField[i+6].getState() == currentPlayer) {
        return true;
      }
    }
    return false;
  }

  private playerWonByDiagonale(currentPlayer: TileState, gameField: Tile[]) : boolean {
    if(
      (gameField[0].getState() == currentPlayer &&
      gameField[4].getState() == currentPlayer &&
      gameField[8].getState() == currentPlayer) ||
      (gameField[2].getState() == currentPlayer &&
      gameField[4].getState() == currentPlayer &&
      gameField[6].getState() == currentPlayer)
    ) {
      return true;
    }
    return false;
  }

  isDraw(gameField: Tile[]) : boolean {
    let everyTile: number = 9;

    for(let i=0; i<everyTile; i++) {
      if(gameField[i].getState() == TileState.UNSET) {
        return false;
      }
    }
    return true;
  }
}
