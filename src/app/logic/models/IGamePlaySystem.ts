import { Tile } from "src/app/logic/models/Tile";
import { TileState } from 'src/app/logic/models/TileState';
import { GameState } from 'src/app/logic/models/GameState';

export interface IGamePlaySystem {
  newGame() : void;
  makeMove(position: number) : void;
  getGameField() : Tile[];
  getCurrentPlayer() : TileState;
  getGameState() : GameState;
}
