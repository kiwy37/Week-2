import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component'; // Adjust the path as necessary


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent], // Import SidenavComponent here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Week2_Angular';
}
