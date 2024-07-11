import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
  @Input() highlight: boolean = false;
  @Output() move = new EventEmitter<void>();

  makeMove() {
    this.move.emit();
  }
}
