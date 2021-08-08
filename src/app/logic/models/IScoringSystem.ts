import { TileState } from 'src/app/logic/models/TileState';

export interface IScoringSystem {
  playerHasWon(currentPlayer : TileState): boolean;
  isDraw(): boolean;
}
