import { ScoringSystem } from "src/app/logic/implementation/ScoringSystem";
import { Tile } from 'src/app/logic/models/Tile';
import { TileState } from 'src/app/logic/models/TileState';
import { IScoringSystem } from "src/app/logic/models/IScoringSystem";
import { TestBed } from "@angular/core/testing";

var scoringSystem: IScoringSystem;

describe('ScoringSystem', () => {

  beforeAll(() => {
    scoringSystem = TestBed.inject(ScoringSystem);
  });

  it('should detect win by row 1', () => {
    var gameField: Tile[] = getWonGameFieldByRow1();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect win by row 2', () => {
    var gameField: Tile[] = getWonGameFieldByRow2();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect win by row 3', () => {
    var gameField: Tile[] = getWonGameFieldByRow3();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect win by col 1', () => {
    var gameField: Tile[] = getWonGameFieldByCol1();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect win by col 2', () => {
    var gameField: Tile[] = getWonGameFieldByCol2();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect win by col 3', () => {
    var gameField: Tile[] = getWonGameFieldByCol3();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should not detect win if tiles are unset', () => {
    var gameField: Tile[] = getEmptyGameField();
    expect(scoringSystem.playerHasWon(TileState.UNSET, gameField)).toBeFalsy();
  });

  it('should detect win by diag 1', () => {
    var gameField: Tile[] = getWonGameFieldByDiag1();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect win by diag 2', () => {
    var gameField: Tile[] = getWonGameFieldByDiag2();
    expect(scoringSystem.playerHasWon(TileState.PLAYER_1, gameField)).toBeTruthy();
  });

  it('should detect draw', () => {
    var gameField: Tile[] = getDrawGameField();
    expect(scoringSystem.isDraw(gameField)).toBeTruthy();
  });

});

function getEmptyGameField() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  for(var i=0; i<tileArray.length; i++) {
    tileArray[i] = new Tile(TileState.UNSET);
  }

  return tileArray;
}

function getWonGameFieldByRow1() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_1);
  tileArray[1] = new Tile(TileState.PLAYER_1);
  tileArray[2] = new Tile(TileState.PLAYER_1);

  tileArray[3] = new Tile(TileState.PLAYER_2);
  tileArray[4] = new Tile(TileState.PLAYER_2);
  tileArray[5] = new Tile(TileState.UNSET);

  tileArray[6] = new Tile(TileState.UNSET);
  tileArray[7] = new Tile(TileState.UNSET);
  tileArray[8] = new Tile(TileState.UNSET);

  return tileArray;
}

function getWonGameFieldByRow2() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_2);
  tileArray[1] = new Tile(TileState.PLAYER_2);
  tileArray[2] = new Tile(TileState.UNSET);

  tileArray[3] = new Tile(TileState.PLAYER_1);
  tileArray[4] = new Tile(TileState.PLAYER_1);
  tileArray[5] = new Tile(TileState.PLAYER_1);

  tileArray[6] = new Tile(TileState.UNSET);
  tileArray[7] = new Tile(TileState.UNSET);
  tileArray[8] = new Tile(TileState.UNSET);

  return tileArray;
}

function getWonGameFieldByRow3() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_2);
  tileArray[1] = new Tile(TileState.PLAYER_2);
  tileArray[2] = new Tile(TileState.UNSET);

  tileArray[3] = new Tile(TileState.UNSET);
  tileArray[4] = new Tile(TileState.UNSET);
  tileArray[5] = new Tile(TileState.UNSET);

  tileArray[6] = new Tile(TileState.PLAYER_1);
  tileArray[7] = new Tile(TileState.PLAYER_1);
  tileArray[8] = new Tile(TileState.PLAYER_1);

  return tileArray;
}

function getWonGameFieldByCol1() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_1);
  tileArray[1] = new Tile(TileState.PLAYER_2);
  tileArray[2] = new Tile(TileState.UNSET);

  tileArray[3] = new Tile(TileState.PLAYER_1);
  tileArray[4] = new Tile(TileState.PLAYER_2);
  tileArray[5] = new Tile(TileState.UNSET);

  tileArray[6] = new Tile(TileState.PLAYER_1);
  tileArray[7] = new Tile(TileState.UNSET);
  tileArray[8] = new Tile(TileState.UNSET);

  return tileArray;
}

function getWonGameFieldByCol2() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_2);
  tileArray[1] = new Tile(TileState.PLAYER_1);
  tileArray[2] = new Tile(TileState.UNSET);

  tileArray[3] = new Tile(TileState.PLAYER_2);
  tileArray[4] = new Tile(TileState.PLAYER_1);
  tileArray[5] = new Tile(TileState.UNSET);

  tileArray[6] = new Tile(TileState.UNSET);
  tileArray[7] = new Tile(TileState.PLAYER_1);
  tileArray[8] = new Tile(TileState.UNSET);

  return tileArray;
}

function getWonGameFieldByCol3() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_2);
  tileArray[1] = new Tile(TileState.UNSET);
  tileArray[2] = new Tile(TileState.PLAYER_1);

  tileArray[3] = new Tile(TileState.PLAYER_2);
  tileArray[4] = new Tile(TileState.UNSET);
  tileArray[5] = new Tile(TileState.PLAYER_1);

  tileArray[6] = new Tile(TileState.PLAYER_1);
  tileArray[7] = new Tile(TileState.UNSET);
  tileArray[8] = new Tile(TileState.PLAYER_1);

  return tileArray;
}

function getWonGameFieldByDiag1() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_1);
  tileArray[1] = new Tile(TileState.PLAYER_2);
  tileArray[2] = new Tile(TileState.UNSET);

  tileArray[3] = new Tile(TileState.PLAYER_2);
  tileArray[4] = new Tile(TileState.PLAYER_1);
  tileArray[5] = new Tile(TileState.UNSET);

  tileArray[6] = new Tile(TileState.UNSET);
  tileArray[7] = new Tile(TileState.UNSET);
  tileArray[8] = new Tile(TileState.PLAYER_1);

  return tileArray;
}

function getWonGameFieldByDiag2() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.UNSET);
  tileArray[1] = new Tile(TileState.PLAYER_2);
  tileArray[2] = new Tile(TileState.PLAYER_1);

  tileArray[3] = new Tile(TileState.PLAYER_2);
  tileArray[4] = new Tile(TileState.PLAYER_1);
  tileArray[5] = new Tile(TileState.UNSET);

  tileArray[6] = new Tile(TileState.PLAYER_1);
  tileArray[7] = new Tile(TileState.UNSET);
  tileArray[8] = new Tile(TileState.UNSET);

  return tileArray;
}

function getDrawGameField() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(TileState.PLAYER_2);
  tileArray[1] = new Tile(TileState.PLAYER_1);
  tileArray[2] = new Tile(TileState.PLAYER_1);

  tileArray[3] = new Tile(TileState.PLAYER_1);
  tileArray[4] = new Tile(TileState.PLAYER_2);
  tileArray[5] = new Tile(TileState.PLAYER_2);

  tileArray[6] = new Tile(TileState.PLAYER_1);
  tileArray[7] = new Tile(TileState.PLAYER_2);
  tileArray[8] = new Tile(TileState.PLAYER_1);

  return tileArray;
}
