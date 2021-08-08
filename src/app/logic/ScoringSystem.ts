import { IScoringSystem } from './models/IScoringSystem';
import { TileState } from 'src/app/logic/models/TileState';
import { Tile } from 'src/app/logic/models/Tile';

export class ScoringSystem implements IScoringSystem {
  private gameField: Tile[];

  constructor(gameField: Tile[]) {
    this.gameField = gameField;
  }

  playerHasWon(currentPlayer : TileState) : boolean {
    if(this.wonByRow(currentPlayer)) return true;
    if(this.wonByColumn(currentPlayer)) return true;
    if(this.wonByDiagonale(currentPlayer)) return true;

    return false;
  }

  private wonByRow(currentPlayer : TileState) : boolean {
    for(let i=0; i<7; i=i+3) {
      if(this.gameField[i].getState() == currentPlayer &&
        this.gameField[i+1].getState() == currentPlayer &&
        this.gameField[i+2].getState() == currentPlayer) {
        return true;
      }
    }
    return false;
  }

  private wonByColumn(currentPlayer : TileState) : boolean {
    for(let i=0; i<3; i++) {
      if(this.gameField[i].getState() == currentPlayer &&
      this.gameField[i+3].getState() == currentPlayer &&
      this.gameField[i+6].getState() == currentPlayer) {
        return true;
      }
    }
    return false;
  }

  private wonByDiagonale(currentPlayer : TileState) : boolean {
    if(
      (this.gameField[0].getState() == currentPlayer &&
      this.gameField[4].getState() == currentPlayer &&
      this.gameField[8].getState() == currentPlayer) ||
      (this.gameField[2].getState() == currentPlayer &&
      this.gameField[4].getState() == currentPlayer &&
      this.gameField[6].getState() == currentPlayer)
    ) {
      return true;
    }
    return false;
  }

  isDraw() : boolean {
    for(let i=0; i<9; i++) {
      if(this.gameField[i].getState() == TileState.UNSET) {
        return false;
      }
    }
    return true;
  }
}
