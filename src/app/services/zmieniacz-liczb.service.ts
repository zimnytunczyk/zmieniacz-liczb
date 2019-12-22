export class ZmieniaczLiczbService {

  public zmienArabskaNaRzymska(liczbaArabska: string) {
    if (liczbaArabska === undefined || liczbaArabska === null) {
      return '';
    }

    const liczba: number = Number(liczbaArabska);

    if (isNaN(liczba)) {
      return 'błąd';
    } else if (liczba <= 0 || liczba % 1 !== 0) {
      return 'nie ma takiej liczby';
    } else if (liczba >= 1 && liczba <= 999){
      this.zmienLiczbe(liczbaArabska.toString());
    } else if (liczba === 1000) {
      return 'M';
    }
    return 'nie zakodowane';
  }

  zmienLiczbe(liczbaArabska: string) {
    console.log('liczba ' + liczbaArabska);
    for (let i = 0; i < liczbaArabska.length; i++) {
      let cyfra = Number(liczbaArabska.charAt(i));
      console.log('cyfra' + cyfra);
    }
  }


  bla(liczba) {
    if (isNaN(liczba)) {
      return 'błąd';
    } else if (liczba <= 0 || liczba % 1 !== 0) {
      return 'nie ma takiej liczby';
    } else if (liczba === 1) {
      return 'I';
    } else if (liczba === 2) {
      return 'II';
    } else if (liczba === 3) {
      return 'III';
    } else if (liczba === 4){
      return 'IV';
    } else if (liczba === 5) {
      return 'V';
    } else if (liczba === 6) {
      return 'VI'
    } else if (liczba === 7) {
      return 'VII'
    } else if (liczba === 8) {
      return 'VIII'
    } else  if (liczba === 9){
      return 'IX'
    } else if (liczba === 10){
      return 'X'
    }
  }
}
