
let imie = 'franek'

function xd(imie) {
  console.log(imie)
}

xd(imie)

class Czlowiek {

  imie
  nazwisko
  telefon

  constructor(imie, nazwisko, telefon) {
    console.log('Tworzę człowieka o imieniu ' + imie)
    this.imie = imie
    this.nazwisko = nazwisko
    this.telefon = telefon
  }

  przedstawSie() {
    console.log('Nazywam się ' + this.imie + ' ' + this.nazwisko)
  }
}

let franek = new Czlowiek('Franek', 'Tokarczyk', '000000000')
let bartek = new Czlowiek('Bartek', 'Tokarczyk', '600675261')
let olek = new Czlowiek('Olek', 'Tokarczyk')

franek.przedstawSie()
bartek.przedstawSie()
olek.przedstawSie()

