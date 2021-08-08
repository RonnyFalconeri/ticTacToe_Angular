import { TestBed } from "@angular/core/testing";
import { GamePlaySystem } from "src/app/logic/implementation/GamePlaySystem";
import { GameState } from "src/app/logic/models/GameState";
import { IGamePlaySystem } from "src/app/logic/models/IGamePlaySystem";
import { Tile } from "src/app/logic/models/Tile";
import { TileState } from "src/app/logic/models/TileState";

var gamePlay: IGamePlaySystem;

describe('GamePlaySystem', () => {

  beforeEach(() => {
    gamePlay = TestBed.inject(GamePlaySystem);
    gamePlay.newGame();
  });

  it('every tile of gameField should be unset after newGame()', () => {
    makeMoveOnEveryField(gamePlay);
    gamePlay.newGame();

    var gameField: Tile[] = gamePlay.getGameField();

    expect(isEveryTileUnset(gameField)).toBeTruthy();
  });

  it('should start with player 1', () => {
    expect(gamePlay.getCurrentPlayer()).toEqual(TileState.PLAYER_1);
  });

  it('currentPlayer should be player 2 after player 1 makes move', () => {
    gamePlay.makeMove(0);
    expect(gamePlay.getCurrentPlayer()).toEqual(TileState.PLAYER_2);
  });

  it('currentPlayer should be player 1 after player 2 makes move', () => {
    gamePlay.makeMove(0);
    gamePlay.makeMove(1);
    expect(gamePlay.getCurrentPlayer()).toEqual(TileState.PLAYER_1);
  });

  it('tile should not be unset if a move was made on it', () => {
    var positionX: number = 0;

    gamePlay.makeMove(positionX);

    var gameField: Tile[] = gamePlay.getGameField();
    var tile: Tile = gameField[positionX];

    expect(tile.getState()).not.toEqual(TileState.UNSET);
  });

  it('player cannot make move on already set tile', () => {
    var positionX: number = 0;
    var playerX: TileState = gamePlay.getCurrentPlayer();

    // player X makes move on tile
    gamePlay.makeMove(positionX);

    // player Y makes move on tile
    gamePlay.makeMove(positionX);

    var gameField: Tile[] = gamePlay.getGameField();
    var tile: Tile = gameField[positionX];

    expect(tile.getState()).toEqual(playerX);
  });

  it('gameState should indicate win after game was won', () => {
    winGame(gamePlay);
    expect(gamePlay.getGameState()).toEqual(GameState.WON);
  });

  it('gameState should indicate draw after game was drawwed', () => {
    drawGame(gamePlay);
    expect(gamePlay.getGameState()).toEqual(GameState.DRAW);
  });

});

function isEveryTileUnset(gameField: Tile[]) : boolean {
  for(var i=0; i<gameField.length; i++) {
    var tile: Tile = gameField[i];

    if(tile.getState() != TileState.UNSET) {
      return false;
    }
  }
  return true;
}

function drawGame(gamePlay: IGamePlaySystem) : void {
  gamePlay.makeMove(0);
  gamePlay.makeMove(4);
  gamePlay.makeMove(8);
  gamePlay.makeMove(2);
  gamePlay.makeMove(6);
  gamePlay.makeMove(3);
  gamePlay.makeMove(5);
  gamePlay.makeMove(7);
  gamePlay.makeMove(1);
}

function winGame(gamePlay: IGamePlaySystem) : void {
  gamePlay.makeMove(0);
  gamePlay.makeMove(3);
  gamePlay.makeMove(1);
  gamePlay.makeMove(4);
  gamePlay.makeMove(2);
}

function makeMoveOnEveryField(gamePlay: IGamePlaySystem) : void {
  gamePlay.makeMove(0);
  gamePlay.makeMove(1);
  gamePlay.makeMove(2);
  gamePlay.makeMove(3);
  gamePlay.makeMove(4);
  gamePlay.makeMove(5);
  gamePlay.makeMove(7);
  gamePlay.makeMove(8);
  gamePlay.makeMove(6);
}
