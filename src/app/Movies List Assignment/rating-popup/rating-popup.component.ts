import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-rating-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-popup.component.html',
  styleUrls: ['./rating-popup.component.css']
})
export class RatingPopupComponent {
  @Input() movie: Movie | null = null;
  @Output() ratingSubmitted = new EventEmitter<number>();
  rating = 0;
  stars = Array(10).fill(0);

  rate(star: number) {
    this.rating = star;
  }

  submitRating() {
    if (this.movie) {
      this.ratingSubmitted.emit(this.rating);
    }
    this.closePopup();
  }

  closePopup() {
    this.ratingSubmitted.emit(-1);
  }
}
