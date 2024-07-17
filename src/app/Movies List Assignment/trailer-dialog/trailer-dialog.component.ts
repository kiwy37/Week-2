import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-trailer-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './trailer-dialog.component.html',
  styleUrls: ['./trailer-dialog.component.css']
})
export class TrailerDialogComponent {
  trailerUrl: SafeResourceUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { trailerUrl: string }, private sanitizer: DomSanitizer) {
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.trailerUrl);
  }
}
