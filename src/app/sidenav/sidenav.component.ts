import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, RouterModule, MatToolbarModule, MatIconModule, MatListModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'] 
})
export class SidenavComponent {
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}