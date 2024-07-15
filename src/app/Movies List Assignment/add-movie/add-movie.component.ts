import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../movie-rating/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  newMovie: Movie = { id: 0, title: '', description: '', image: '', rating: 0 };

  constructor(private movieService: MovieService, private router: Router) {}

  addMovie() {
    this.movieService.addMovie(this.newMovie);
    this.router.navigate(['/movies']);
  }
}
