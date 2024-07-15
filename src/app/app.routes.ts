import { Routes } from '@angular/router';
import { RegisterFormComponent } from './Register Form Assignment/register-form/register-form.component';
import { HangmanComponent } from './Hangman Assignment/hangman/hangman.component';
import { BoardComponent } from './XandO Assignment/board/board.component';
import { MovieGridComponent } from './Movies List Assignment/movie-grid/movie-grid.component';
import { MovieDetailComponent } from './Movies List Assignment/movie-detail/movie-detail.component';
import { AddMovieComponent } from './Movies List Assignment/add-movie/add-movie.component';

export const routes: Routes = [
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'board', component: BoardComponent },
  { path: 'movie-grid', component: MovieGridComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: '', redirectTo: '/movie-grid', pathMatch: 'full' }
];