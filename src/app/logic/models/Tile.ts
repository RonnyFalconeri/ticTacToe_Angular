import { TileState } from 'src/app/logic/models/TileState';

export class Tile {
  private state: TileState;

  constructor(state: TileState) {
    this.state = state;
  }

  public setState(state: TileState) : void {
    this.state = state;
  }

  public getState() : TileState {
    return this.state;
  }
}
