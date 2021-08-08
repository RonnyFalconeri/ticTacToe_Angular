import { TileState } from 'src/app/logic/models/TileState';
import { Tile } from 'src/app/logic/models/Tile';

export interface IScoringSystem {
  playerHasWon(currentPlayer : TileState, gameField: Tile[]): boolean;
  isDraw(gameField: Tile[]): boolean;
}
