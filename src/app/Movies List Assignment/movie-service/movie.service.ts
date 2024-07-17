import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];

  constructor() {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie) {
    movie.id = this.generateUniqueId();
    this.movies.push(movie);
    this.saveMovies();
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
    this.saveMovies();
  }

  setMyRating(id: number, myRating: number) {
    const movie = this.movies.find(m => m.id === id);
    if (movie) {
      movie.myRating = myRating;
      movie.averageRating = this.calculateAverageRating(movie.rating, myRating);
      this.saveMovies();
    }
  }

  private generateUniqueId(): number {
    return this.movies.length ? Math.max(...this.movies.map(m => m.id)) + 1 : 1;
  }

  private calculateAverageRating(existingRating: number, myRating: number): number {
    return (existingRating + myRating) / 2;
  }

  private saveMovies() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
