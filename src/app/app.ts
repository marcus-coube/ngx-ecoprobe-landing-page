import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecoprobe-landing-page');


  openWhatsapp() {
    window.open('https://wa.me/41987191306', '_blank');
  }
}
