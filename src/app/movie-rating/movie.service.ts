import { Injectable } from '@angular/core';
import { Movie } from '../Movies List Assignment/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    // Initial movies list 
    { id: 1, title: 'The Boys', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.7, description: 'A group of vigilantes sets out to take down corrupt superheroes.' },
    { id: 2, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 3, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 4, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 5, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 6, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 7, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 8, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 9, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 10, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 11, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 12, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 13, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 14, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 15, title: 'House of the Dragon', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.4, description: 'A prequel to Game of Thrones, focusing on the Targaryen dynasty.' },
    { id: 16, title: 'The Bear', image: 'https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: 8.6, description: 'A young chef from the fine dining world comes home to Chicago to run his family’s sandwich shop.' }
  ];

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
    this.movies.push(movie);
    this.saveMovies();
  }

  rateMovie(id: number, rating: number) {
    const movie = this.movies.find(m => m.id === id);
    if (movie) {
      movie.rating = rating;
      this.saveMovies();
    }
  }

  private saveMovies() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
