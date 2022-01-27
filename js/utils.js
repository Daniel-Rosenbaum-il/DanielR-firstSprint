"use strict";
function renderBoard(board) {
  var strHtml = `<table border="1"><tbody>`;
  var cell = "";
  var className = '"';
  for (var i = 0; i < gLevel.size; i++) {
    strHtml += "<tr>";
    for (var j = 0; j < gLevel.size; j++) {
      if (!gBoard[i][j].isShown) {
        cell = EMPTY;
        className = '"';
      } else {
        className = ' shown"';
        if (gBoard[i][j].isMine) {
          cell = MINE;
        } else if (gBoard[i][j].minesAroundCount > 0) {
          cell = gBoard[i][j].minesAroundCount;
        } else {
          cell = EMPTY;
        }
      }
      if (gBoard[i][j].isMarked) {
        cell = FLAG;
      }
      strHtml += `<td class="cell${className} data-i ="${i}" data-j="${j}" onclick="cellClicked(this)" oncontextmenu="markFlags(event)">${cell}</td> `;
    }
    strHtml += `</tr>`;
  }

  strHtml += `</tbody></table>`;
  var elContainer = document.querySelector(".board-container");
  elContainer.innerHTML = strHtml;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
