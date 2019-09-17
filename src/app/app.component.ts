import {Component} from '@angular/core';
import {ZmieniaczLiczbService} from "./services/zmieniacz-liczb.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zmieniacz-liczb';
  liczbaArabska: string;
  zmieniaczLiczb: ZmieniaczLiczbService = new ZmieniaczLiczbService();

  zamienNaRzymska(): string {
    return this.zmieniaczLiczb.zmienArabskaNaRzymska(this.liczbaArabska);
  }
}
