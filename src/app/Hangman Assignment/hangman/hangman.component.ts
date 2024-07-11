import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../../hangman.service';
import { HangmanDisplayComponent } from '../hangman-display/hangman-display.component';
import { HangmanInputComponent } from '../hangman-input/hangman-input.component';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, HangmanDisplayComponent, HangmanInputComponent, HangmanDrawingComponent],
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css'],
  providers: [HangmanService]
})
export class HangmanComponent {
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  guessedLetters: string[] = [];
  remainingAttempts: number = this.hangmanService.maxIncorrectGuesses;
  showModal: boolean = false;
  message: string ='';

  constructor(public hangmanService: HangmanService) {
    this.hangmanService.incorrectGuesses$.subscribe((incorrectGuesses) => {
      this.remainingAttempts = this.hangmanService.maxIncorrectGuesses - incorrectGuesses;
    });
  }

  closeModal() {
    this.showModal = false;
    this.startNewGame();
  }

  guessLetter(letter: string) {
    if (!this.guessedLetters.includes(letter)) {
      this.hangmanService.gameStatus$.subscribe(status => {
        if (status === 'In Progress') {
          this.guessedLetters.push(letter);
          this.hangmanService.guessLetter(letter);
        }
      }).unsubscribe();  
    }
    this.hangmanService.gameStatus$.subscribe(status => {
      if(status==='Lost')
        {
          this.message = "You lost.";
          this.showModal = true;
        }
      else  if(status==='Won')
          {
          this.message = "You won.";
          this.showModal = true;
        }
    }).unsubscribe();
  }

  isGuessed(letter: string): boolean {
    return this.guessedLetters.includes(letter);
  }

  isCorrect(letter: string): boolean {
    return this.hangmanService.isCorrect(letter);
  }

  isIncorrect(letter: string): boolean {
    return this.hangmanService.isIncorrect(letter);
  }

  startNewGame() {
    this.guessedLetters = [];
    this.hangmanService.startNewGame();
  }
}
