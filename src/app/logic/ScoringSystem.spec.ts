import { ScoringSystem } from "./ScoringSystem";
import { Tile } from 'src/app/logic/models/Tile';
import { TileState } from 'src/app/logic/models/TileState';
import { IScoringSystem } from "./models/IScoringSystem";

var winner: TileState = TileState.PLAYER_1;
var looser: TileState = TileState.PLAYER_2;
var unset: TileState = TileState.UNSET;

describe('ScoringSystem', () => {

  it('should detect win by row 1', () => {
    var gameField: Tile[] = getWonGameFieldByRow1();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by row 2', () => {
    var gameField: Tile[] = getWonGameFieldByRow2();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by row 3', () => {
    var gameField: Tile[] = getWonGameFieldByRow3();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by col 1', () => {
    var gameField: Tile[] = getWonGameFieldByCol1();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by col 2', () => {
    var gameField: Tile[] = getWonGameFieldByCol2();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by col 3', () => {
    var gameField: Tile[] = getWonGameFieldByCol3();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by diag 1', () => {
    var gameField: Tile[] = getWonGameFieldByDiag1();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect win by diag 2', () => {
    var gameField: Tile[] = getWonGameFieldByDiag2();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.playerHasWon(winner)).toBeTruthy();
  });

  it('should detect draw', () => {
    var gameField: Tile[] = getDrawGameField();
    var scoringSystem: IScoringSystem = new ScoringSystem(gameField);

    expect(scoringSystem.isDraw()).toBeTruthy();
  });

});

function getWonGameFieldByRow1() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(winner);
  tileArray[1] = new Tile(winner);
  tileArray[2] = new Tile(winner);

  tileArray[3] = new Tile(looser);
  tileArray[4] = new Tile(looser);
  tileArray[5] = new Tile(unset);

  tileArray[6] = new Tile(unset);
  tileArray[7] = new Tile(unset);
  tileArray[8] = new Tile(unset);

  return tileArray;
}

function getWonGameFieldByRow2() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(looser);
  tileArray[1] = new Tile(looser);
  tileArray[2] = new Tile(unset);

  tileArray[3] = new Tile(winner);
  tileArray[4] = new Tile(winner);
  tileArray[5] = new Tile(winner);

  tileArray[6] = new Tile(unset);
  tileArray[7] = new Tile(unset);
  tileArray[8] = new Tile(unset);

  return tileArray;
}

function getWonGameFieldByRow3() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(looser);
  tileArray[1] = new Tile(looser);
  tileArray[2] = new Tile(unset);

  tileArray[3] = new Tile(unset);
  tileArray[4] = new Tile(unset);
  tileArray[5] = new Tile(unset);

  tileArray[6] = new Tile(winner);
  tileArray[7] = new Tile(winner);
  tileArray[8] = new Tile(winner);

  return tileArray;
}

function getWonGameFieldByCol1() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(winner);
  tileArray[1] = new Tile(looser);
  tileArray[2] = new Tile(unset);

  tileArray[3] = new Tile(winner);
  tileArray[4] = new Tile(looser);
  tileArray[5] = new Tile(unset);

  tileArray[6] = new Tile(winner);
  tileArray[7] = new Tile(unset);
  tileArray[8] = new Tile(unset);

  return tileArray;
}

function getWonGameFieldByCol2() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(looser);
  tileArray[1] = new Tile(winner);
  tileArray[2] = new Tile(unset);

  tileArray[3] = new Tile(looser);
  tileArray[4] = new Tile(winner);
  tileArray[5] = new Tile(unset);

  tileArray[6] = new Tile(unset);
  tileArray[7] = new Tile(winner);
  tileArray[8] = new Tile(unset);

  return tileArray;
}

function getWonGameFieldByCol3() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(looser);
  tileArray[1] = new Tile(unset);
  tileArray[2] = new Tile(winner);

  tileArray[3] = new Tile(looser);
  tileArray[4] = new Tile(unset);
  tileArray[5] = new Tile(winner);

  tileArray[6] = new Tile(winner);
  tileArray[7] = new Tile(unset);
  tileArray[8] = new Tile(winner);

  return tileArray;
}

function getWonGameFieldByDiag1() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(winner);
  tileArray[1] = new Tile(looser);
  tileArray[2] = new Tile(unset);

  tileArray[3] = new Tile(looser);
  tileArray[4] = new Tile(winner);
  tileArray[5] = new Tile(unset);

  tileArray[6] = new Tile(unset);
  tileArray[7] = new Tile(unset);
  tileArray[8] = new Tile(winner);

  return tileArray;
}

function getWonGameFieldByDiag2() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(unset);
  tileArray[1] = new Tile(looser);
  tileArray[2] = new Tile(winner);

  tileArray[3] = new Tile(looser);
  tileArray[4] = new Tile(winner);
  tileArray[5] = new Tile(unset);

  tileArray[6] = new Tile(winner);
  tileArray[7] = new Tile(unset);
  tileArray[8] = new Tile(unset);

  return tileArray;
}

function getDrawGameField() : Tile[] {
  var tileArray: Tile[] = new Array(9);

  tileArray[0] = new Tile(looser);
  tileArray[1] = new Tile(winner);
  tileArray[2] = new Tile(winner);

  tileArray[3] = new Tile(winner);
  tileArray[4] = new Tile(looser);
  tileArray[5] = new Tile(looser);

  tileArray[6] = new Tile(winner);
  tileArray[7] = new Tile(looser);
  tileArray[8] = new Tile(winner);

  return tileArray;
}
