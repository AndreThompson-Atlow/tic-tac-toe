import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';
  hardMode = false;

  toggleDifficulty(e) {
    if (e) {
      this.hardMode = true;
    } else {
      this.hardMode = false;
    }
  }
}
