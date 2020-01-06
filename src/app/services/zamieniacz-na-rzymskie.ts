
export class ZamieniaczNaRzymskie {

  jeden
  piec
  dziesiec

  constructor(jeden, piec, dziesienc) {
    this.jeden = jeden;
    this.piec = piec;
    this.dziesiec = dziesienc;
  }

  zmienCyfreArabskaNaRzymska(cyfra) {
    if (isNaN(cyfra)) {
      return 'błąd';
    } else if (cyfra === 0) {
      return '';
    } else if (cyfra === 1) {
      return this.jeden;
    } else if (cyfra === 2) {
      return this.jeden + this.jeden;
    } else if (cyfra === 3) {
      return this.jeden + this.jeden + this.jeden;
    } else if (cyfra === 4) {
      return this.jeden + this.piec;
    } else if (cyfra === 5) {
      return this.piec;
    } else if (cyfra === 6) {
      return this.piec + this.jeden
    } else if (cyfra === 7) {
      return this.piec + this.jeden + this.jeden
    } else if (cyfra === 8) {
      return this.piec + this.jeden + this.jeden + this.jeden
    } else if (cyfra === 9) {
      return this.jeden + this.dziesiec
    }
  }
}
