import {ZmieniaczLiczbService} from "./zmieniacz-liczb.service";

describe('Testy', () => {

  it('1 -> I', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('1')).toEqual('I');
  });

  it('2 -> II', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('2')).toEqual('II');
  });

  it('3 -> III', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('3')).toEqual('III');
  });

  it('4 -> IV', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('4')).toEqual('IV');
  });

  it('5 -> V', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('5')).toEqual('V');
  });

  it('6 -> VI', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('6')).toEqual('VI');
  });

});
