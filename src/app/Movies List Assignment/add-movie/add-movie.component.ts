import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MovieService } from '../movie-service/movie.service';
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
  newMovie: Movie = {
    id: 0,
    title: '',
    image: '',
    description: '',
    rating: 1,
    myRating: null,
    averageRating: 1,
    creators: [],
    stars: [],
    releaseDate: null,
    genre: [],
    trailer: ''
  };

  newCreator: string = '';
  newStar: string = '';
  newGenre: string = '';

  constructor(private movieService: MovieService, private router: Router) {}

  addCreator() {
    if (this.newCreator) {
      this.newMovie.creators.push(this.newCreator);
      this.newCreator = '';
    }
  }

  removeCreator(index: number) {
    this.newMovie.creators.splice(index, 1);
  }

  addStar() {
    if (this.newStar) {
      this.newMovie.stars.push(this.newStar);
      this.newStar = '';
    }
  }

  removeStar(index: number) {
    this.newMovie.stars.splice(index, 1);
  }

  addGenre() {
    if (this.newGenre) {
      this.newMovie.genre.push(this.newGenre);
      this.newGenre = '';
    }
  }

  removeGenre(index: number) {
    this.newMovie.genre.splice(index, 1);
  }

  addMovie(movieForm: NgForm) {
    if (this.isFormValid(movieForm)) {
      this.newMovie.averageRating = this.newMovie.rating;
      this.movieService.addMovie(this.newMovie);
      this.router.navigate(['/movie-grid']);
    } else {
      this.markFormFieldsAsTouched(movieForm);
    }
  }

  public isFormValid(movieForm: NgForm): boolean {
    const formValid = !!movieForm.valid;
    const creatorsValid = this.newMovie.creators.length > 0;
    const starsValid = this.newMovie.stars.length > 0;
    const genresValid = this.newMovie.genre.length > 0;
    const dateValid = this.newMovie.releaseDate !== null;

    return formValid && creatorsValid && starsValid && genresValid && dateValid;
  }

  private markFormFieldsAsTouched(form: NgForm) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({ onlySelf: true });
    });
  }

  public isCreatorsInvalid(movieForm: NgForm): boolean {
    return movieForm.controls['creator']?.touched && this.newMovie.creators.length === 0;
  }

  public isStarsInvalid(movieForm: NgForm): boolean {
    return movieForm.controls['star']?.touched && this.newMovie.stars.length === 0;
  }

  public isGenresInvalid(movieForm: NgForm): boolean {
    return movieForm.controls['genre']?.touched && this.newMovie.genre.length === 0;
  }
}
