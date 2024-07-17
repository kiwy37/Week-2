import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie-service/movie.service';
import { Movie } from '../movie.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TrailerDialogComponent } from '../trailer-dialog/trailer-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  stars: number[] = [];
  userStars: number[] = [];
  showTrailer = false;
  Math = Math; 

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovies().find(m => m.id === movieId);

    if (this.movie) {
      this.stars = Array(Math.round(this.movie.rating)).fill(0);
      if (this.movie.myRating !== null) {
        this.userStars = Array(this.movie.myRating).fill(0);
      }
    }
  }

  playTrailer() {
    if (this.movie) {
      const youtubeUrl = this.movie.trailer.replace('watch?v=', 'embed/');
      this.dialog.open(TrailerDialogComponent, {
        width: '600px',
        data: { trailerUrl: youtubeUrl }
      });
    }
  }
}
