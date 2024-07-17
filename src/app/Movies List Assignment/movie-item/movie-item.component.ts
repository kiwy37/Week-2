import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() userRating: number | null = null;
  @Output() rate = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {}

  openRatingPopup() {
    this.rate.emit();
  }

  deleteMovie() {
    this.delete.emit();
  }

  navigateToDetails() {
    this.router.navigate(['/movie-detail', this.movie.id]);
  }
}
