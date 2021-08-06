import { TileState } from 'src/app/logic/models/TileState';
import { Tile } from 'src/app/logic/models/Tile';

export interface IReferee {
  gameField: Tile[];

  playerHasWon(currentPlayer : TileState): boolean;
  isDraw(): boolean;
}
