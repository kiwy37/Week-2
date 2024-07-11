import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: ('X' | 'O' | null)[] = [];
  xIsNext: boolean = true;
  winner: 'X' | 'O' | null = null;
  winningLine: number[] | null = null;
  message: string = '';
  showModal: boolean = false;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.winningLine = null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  handleMove(index: number) {
    if (!this.squares[index] && !this.winner) {
      this.squares[index] = this.player;
      const winnerData = this.calculateWinner();
      if (winnerData) {
        this.winner = this.player;
        this.winningLine = winnerData;
        if(this.winner==='X')
          this.message = "Player 1 wins!";
        else
          this.message = "Player 2 wins!";
        this.showModal = true;
      } else if (this.isBoardFull()) {
        this.message = "It's a tie!";
        this.showModal = true;
      } else {
        this.xIsNext = !this.xIsNext;
      }
    }
  }

  closeModal() {
    this.showModal = false;
    this.newGame();
  }

  calculateWinner(): number[] | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

  isBoardFull(): boolean {
    return this.squares.every(square => square !== null);
  }
  
  getLineClass(line: number[]): string {
    if (line[0] === 0 && line[1] === 1 && line[2] === 2) {
      return 'horizontal horizontal-1';
    }
    if (line[0] === 3 && line[1] === 4 && line[2] === 5) {
      return 'horizontal horizontal-2';
    }
    if (line[0] === 6 && line[1] === 7 && line[2] === 8) {
      return 'horizontal horizontal-3';
    }
    if (line[0] === 0 && line[1] === 3 && line[2] === 6) {
      return 'vertical vertical-1';
    }
    if (line[0] === 1 && line[1] === 4 && line[2] === 7) {
      return 'vertical vertical-2';
    }
    if (line[0] === 2 && line[1] === 5 && line[2] === 8) {
      return 'vertical vertical-3';
    }
    if (line[0] === 0 && line[1] === 4 && line[2] === 8) {
      return 'diagonal diagonal-1';
    }
    if (line[0] === 2 && line[1] === 4 && line[2] === 6) {
      return 'diagonal diagonal-2';
    }
    return '';
  }
  
}
