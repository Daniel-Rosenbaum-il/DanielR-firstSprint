function setRandomMines(gLevel, elFirstCell) {
  for (var i = 0; i < gLevel.mines; i++) {
    var mineLocation = {
      i: getRandomInt(0, gLevel.size),
      j: getRandomInt(0, gLevel.size),
    };
    if (
      gBoard[mineLocation.i][mineLocation.j].isMine ||
      (elFirstCell.i === mineLocation.i && elFirstCell.j === mineLocation.j)
    ) {
      //check if work
      i--;
    } else {
      gBoard[mineLocation.i][mineLocation.j].isMine = true;
    }
  }
  return;
}

function setMinesNegsCount() {
  for (var i = 0; i < gLevel.size; i++) {
    for (var j = 0; j < gLevel.size; j++) {
      var cell = gBoard[i][j];
      if (cell.isMine) continue;
      cell.minesAroundCount = minesAround(gBoard, i, j);
    }
  }
}

function minesAround(board, cellI, cellJ) {
  var minesAroundCell = 0;
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= gLevel.size) continue;
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue;
      if (j < 0 || j >= gLevel.size) continue;
      if (board[i][j].isMine) minesAroundCell++;
    }
  }
  return minesAroundCell;
}
