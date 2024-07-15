import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../movie-rating/movie.service';
import { Movie } from '../movie.model';
import { RatingPopupComponent } from '../rating-popup/rating-popup.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [CommonModule, RatingPopupComponent, MovieItemComponent],
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null;
  selectedMovieId: number | null = null;
  userRatings: { [movieId: number]: number } = {};

  constructor(private movieService: MovieService, private router:Router) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  openRatingPopup(movie: Movie) {
    this.selectedMovie = movie;
    this.selectedMovieId = movie.id;
  }

  closeRatingPopup() {
    this.selectedMovie = null;
    this.selectedMovieId = null;
  }

  submitRating(rating: number) {
    if (rating !== -1 && this.selectedMovie) {
      this.movieService.rateMovie(this.selectedMovie.id, rating);
      this.userRatings[this.selectedMovie.id] = rating;
      this.movies = this.movieService.getMovies(); 
    }
    this.closeRatingPopup();
  }

  scrollLeft() {
    const grid = document.querySelector('.movie-grid');
    if (grid) {
      grid.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const grid = document.querySelector('.movie-grid');
    if (grid) {
      grid.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  navigateToAddMovie() {
    this.router.navigate(['/add-movie']);
  }
}
