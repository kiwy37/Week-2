import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../hangman-service/hangman.service';

@Component({
  selector: 'app-hangman-drawing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-drawing.component.html',
  styleUrls: ['./hangman-drawing.component.css'] 
})
export class HangmanDrawingComponent {
  incorrectGuesses: number = 0;
  gameOver: boolean = false; 

  constructor(public hangmanService: HangmanService) {
    this.hangmanService.incorrectGuesses$.subscribe((value) => {
      this.incorrectGuesses = value;
      this.gameOver = value >= 6;
    });
  }
}