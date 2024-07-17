import { Routes } from '@angular/router';
import { RegisterFormComponent } from './Register Form Assignment/register-form/register-form.component';
import { HangmanComponent } from './Hangman Assignment/hangman/hangman.component';
import { BoardComponent } from './XandO Assignment/board/board.component';
import { MovieGridComponent } from './Movies List Assignment/movie-grid/movie-grid.component';
import { AddMovieComponent } from './Movies List Assignment/add-movie/add-movie.component';
import { MovieDetailsComponent } from './Movies List Assignment/movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'board', component: BoardComponent },
  { path: 'movie-grid', component: MovieGridComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'movie-detail/:id', component: MovieDetailsComponent }, 
  { path: '', redirectTo: '/register-form', pathMatch: 'full' }
];