import {ZamieniaczNaRzymskie} from "./zamieniacz-na-rzymskie";

describe('Testy', () => {

  it('1 -> I', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(1)).toEqual('I');
  });

  it('2 -> II', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(2)).toEqual('II');
  });

  it('3 -> III', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(3)).toEqual('III');
  });

  it('4 -> IV', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(4)).toEqual('IV');
  });

  it('5 -> V', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(5)).toEqual('V');
  });

  it('6 -> VI', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(6)).toEqual('VI');
  });

  it('7 -> VII', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(7)).toEqual('VII');
  });

  it('8 -> VIII', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(8)).toEqual('VIII');
  });

  it('9 -> IX', () => {
    const zmieniaczLiczb = new ZamieniaczNaRzymskie('I', 'V', 'X');
    expect(zmieniaczLiczb.zmienCyfreArabskaNaRzymska(9)).toEqual('IX');
  });

});
