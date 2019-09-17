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
    }
    return 'nie zakodowane';
  }
}
