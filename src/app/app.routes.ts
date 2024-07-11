import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HangmanComponent } from './hangman/hangman.component';

export const routes: Routes = [
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'hangman', component: HangmanComponent }
];