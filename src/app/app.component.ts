import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zmieniacz-liczb';
  liczbaArabska: number;

  zamienNaRzymska(): string {
    if (!this.liczbaArabska) {
      return '';
    }
    if (isNaN(this.liczbaArabska)) {
      return 'błąd';
    } else {
      const liczba = Number(this.liczbaArabska);
      if (liczba === 1) {
        return 'I';
      } else {
        return 'not implemented';
      }
    }
  }
}
