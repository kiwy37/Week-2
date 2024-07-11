import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../../hangman.service';

@Component({
  selector: 'app-hangman-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-display.component.html',
  styleUrl: './hangman-display.component.css'
})
export class HangmanDisplayComponent {
  constructor(public hangmanService: HangmanService) {}
}
