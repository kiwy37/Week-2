import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HangmanService } from '../hangman-service/hangman.service';

@Component({
  selector: 'app-hangman-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hangman-input.component.html',
  styleUrls: ['./hangman-input.component.css']
})
export class HangmanInputComponent {
  @Output() letterGuessed: EventEmitter<string> = new EventEmitter<string>();

  constructor(public hangmanService: HangmanService) {}

  guessLetter(input: HTMLInputElement) {
    const letter = input.value.toUpperCase();
    this.hangmanService.gameStatus$.subscribe(status => {
      if (status === 'In Progress' && /^[A-Z]$/.test(letter)) {
        this.letterGuessed.emit(letter);
        this.hangmanService.guessLetter(letter);
      }
    }).unsubscribe();
    input.value = '';  
  }
}
