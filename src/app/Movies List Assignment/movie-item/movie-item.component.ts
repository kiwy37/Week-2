import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Input() userRating: number | null = null;
  @Output() rate = new EventEmitter<void>();
  randomRatingCount: number = Math.floor(Math.random() * 1000) + 1;

  openRatingPopup() {
    this.rate.emit();
  }
}
