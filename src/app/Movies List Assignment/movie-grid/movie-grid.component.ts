import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie-service/movie.service';
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
export class MovieGridComponent implements OnInit, AfterViewInit {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null;
  @ViewChild('movieGrid') movieGrid!: ElementRef<HTMLDivElement>;
  elementWidth: number = 0;
 
  constructor(private movieService: MovieService, private router: Router) {}
 
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
 
  ngAfterViewInit() {
    this.calculateElementWidth();
  }
 
  calculateElementWidth() {
    const firstElement = this.movieGrid.nativeElement.querySelector('app-movie-item');
    if (firstElement) {
      this.elementWidth = firstElement.clientWidth + 20; // 20 este valoarea gap-ului dintre elemente
    }
  }
 
  openRatingPopup(movie: Movie) {
    this.selectedMovie = movie;
  }
 
  closeRatingPopup() {
    this.selectedMovie = null;
  }
 
  submitRating(rating: number) {
    if (rating !== -1 && this.selectedMovie) {
      this.movieService.setMyRating(this.selectedMovie.id, rating);
      this.movies = this.movieService.getMovies();
    }
    this.closeRatingPopup();
  }
 
  scrollLeft() {
    const grid = this.movieGrid.nativeElement;
    if (grid) {
      grid.scrollBy({ left: -this.elementWidth, behavior: 'smooth' });
    }
  }
 
  scrollRight() {
    const grid = this.movieGrid.nativeElement;
    if (grid) {
      grid.scrollBy({ left: this.elementWidth, behavior: 'smooth' });
    }
  }
 
  navigateToAddMovie() {
    this.router.navigate(['/add-movie']);
  }
 
  deleteMovie(id: number) {
    this.movieService.deleteMovie(id);
    this.movies = this.movieService.getMovies();
  }
}