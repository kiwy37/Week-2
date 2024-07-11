import { Routes } from '@angular/router';
import { RegisterFormComponent } from './Register Form Assignment/register-form/register-form.component';
import { HangmanComponent } from './Hangman Assignment/hangman/hangman.component';
import { BoardComponent } from './XandO Assignment/board/board.component';

export const routes: Routes = [
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'board', component: BoardComponent }
];