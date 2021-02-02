import { Component, OnInit, Input } from '@angular/core';
import { winningBoards } from './data';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  @Input() hardMode: boolean;
  victoryStatus: boolean;
  isDraw: boolean;
  gameActive = true;
  playerTurn = true;
  constructor() {}

  ngOnInit(): void {}

  enemyTurn(e: number[]) {
    // Enemy Turn Method
    setTimeout(() => {
      this.checkForVictory();
      if (this.gameActive === false) {
        return;
      }
    }, 1000);
    this.playerTurn = false;
    this.board[e[0]][e[1]] = 1;
    let count: number = this.getRandomNumber();
    let moved = false;
    let canMove = false;
    this.board.forEach((row) => {
      row.forEach((col) => {
        if (col === 0) {
          canMove = true;
        }
      });
    });
    setTimeout(() => {
      while (!moved && canMove) {
        if (!this.hardMode) {
          // Random & Easy A.I.
          this.board.forEach((row, rowInd) => {
            if (count > 0) {
              this.board.forEach((col, colInd) => {
                if (count > 0) {
                  if (this.board[rowInd][colInd] === 0) {
                    count--;
                    if (count === 0) {
                      moved = true;
                      this.board[rowInd][colInd] = 2;
                    }
                  }
                }
              });
            }
          });
        } else {
          // Implement difficult API here
        }
      }
    }, 1200);
    setTimeout(() => {
      this.checkForVictory();
      this.playerTurn = true;
    }, 1500);
  }

  getRandomNumber(): number {
    let num = Math.random() * 8;
    num = Math.round(num);
    return num + 1;
  }

  playAgain() {
    this.victoryStatus = undefined;
    this.isDraw = undefined;
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.gameActive = true;
  }

  checkForVictory() {
    // This method needs to determine if someone has scored a tic tac toe or not. If so, end the game. If not, keep playing.
    console.log('checking for victory');
    winningBoards.forEach((board) => {
      let compare = this.compareBoards(this.board, board);
      if (compare[0].gameOver) {
        this.gameActive = false;
        if (compare[0].victor === 'player') {
          this.victoryStatus = true;
        } else {
          this.victoryStatus = false;
        }
      } else {
        // Nobody has won
        if (this.checkForDraw()) {
          this.gameActive = false;
          this.victoryStatus = false;
          this.isDraw = true;
        }
        return;
      }
    });
  }
  checkForDraw() {
    let draw = true;
    this.board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (this.board[rowIndex][colIndex] === 0) {
          draw = false;
        }
      });
    });
    return draw;
  }

  compareBoards(currentBoard, winningBoard) {
    let playerWins = true; //Will turn false if a test fails
    let computerWins = true; //Will turn false if a test fails
    winningBoard.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (winningBoard[rowIndex][colIndex] === 1) {
          //This is a winning square. Must check.
          if (currentBoard[rowIndex][colIndex] !== 1) {
            //if this if block passes, that means the player did not pass the check for this board.
            playerWins = false;
          }
          if (currentBoard[rowIndex][colIndex] !== 2) {
            //if this if block passes, that means the computer did not pass the check for this board.
            computerWins = false;
          }
        }
      });
    });
    //Leaving this here to satisfy the rest of the code.
    let res = [
      {
        gameOver: false,
        victor: '',
      },
    ];
    if (playerWins || computerWins) {
      res[0].gameOver = true;
      if (playerWins) {
        res[0].victor = 'player';
      } else {
        res[0].victor = 'enemy';
      }
    }
    return res;
  }
}
