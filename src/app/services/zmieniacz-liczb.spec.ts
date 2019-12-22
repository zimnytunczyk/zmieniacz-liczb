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

  it('7 -> VII', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('7')).toEqual('VII');
  });

  it('8 -> VIII', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('8')).toEqual('VIII');
  });

  it('9 -> IX', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('9')).toEqual('IX');
  });

  it('10 -> X', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('10')).toEqual('X');
  });

  it('1000 -> M', () => {
    const zmieniaczLiczb = new ZmieniaczLiczbService();
    expect(zmieniaczLiczb.zmienArabskaNaRzymska('1000')).toEqual('M');
  });
});
