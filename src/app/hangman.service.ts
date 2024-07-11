import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  private words = ['ANGULAR', 'COMPONENT', 'SERVICE', 'DIRECTIVE'];
  private originalWord = '';
  private selectedWord = new BehaviorSubject<string>('');
  private guessedLetters = new Set<string>();
  private incorrectGuesses = new BehaviorSubject<number>(0);
  private gameStatus = new BehaviorSubject<string>('In Progress');
  incorrectGuesses$ = this.incorrectGuesses.asObservable();
  currentWord$ = this.selectedWord.asObservable();
  gameStatus$ = this.gameStatus.asObservable();
  remainingAttempts$: Observable<number>;

  maxIncorrectGuesses = 6;

  constructor() {
    this.remainingAttempts$ = this.incorrectGuesses$.pipe(
      map(incorrectGuesses => this.maxIncorrectGuesses - incorrectGuesses)
    );
    this.startNewGame();
  }

  startNewGame() {
    this.originalWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.selectedWord.next(this.maskWord(this.originalWord, []));
    this.guessedLetters.clear();
    this.incorrectGuesses.next(0);
    this.gameStatus.next('In Progress');
  }

  guessLetter(letter: string) {
    if (this.gameStatus.value !== 'In Progress' || this.guessedLetters.has(letter)) return;

    this.guessedLetters.add(letter);

    if (this.originalWord.includes(letter)) {
      this.selectedWord.next(this.maskWord(this.originalWord, Array.from(this.guessedLetters)));
      this.checkWin();
    } else {
      this.incorrectGuesses.next(this.incorrectGuesses.value + 1);
      if (this.incorrectGuesses.value >= this.maxIncorrectGuesses) {
        this.endGame(false);
      }
    }
  }

  isCorrect(letter: string): boolean {
    return this.originalWord.includes(letter);
  }

  isIncorrect(letter: string): boolean {
    return this.guessedLetters.has(letter) && !this.originalWord.includes(letter);
  }

  private maskWord(word: string, guessedLetters: string[]): string {
    return word.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
  }

  private checkWin() {
    if (!this.selectedWord.value.includes('_')) {
      this.endGame(true);
    }
  }

  private endGame(won: boolean) {
    if (won) {
      this.gameStatus.next('Won');
    } else {
      this.selectedWord.next(this.originalWord.split('').join(' ')); 
      this.gameStatus.next('Lost');
    }
  }
}
