console.log('Start ')
const start = new Date().getTime()
let liczbaKombinacji = 0
let liczbaPoprawnychKombinacjiDlaWiazanki1 = 0
let liczbaPoprawnychKombinacji = 0

for (let irys = 1; irys <= 1700; irys++){
  for (let roza = 1; roza <= 1700; roza++){
    liczbaKombinacji++
    const cenaWiazanki1 = 3 * roza + 2 * irys + 150
    if (cenaWiazanki1 === 2400) {
      liczbaPoprawnychKombinacjiDlaWiazanki1++
      const cenaWizanki2 = 1 * roza + 3 * irys + 150
      console.log('Cena róży ' + roza / 100 + '. Cena irysa ' + irys / 100 + '. Cena 2 wiązanki ' + cenaWizanki2 / 100)
      if (cenaWizanki2 === 1700) {
        console.log('Cena róży ' + roza / 100 + '. Cena irysa ' + irys / 100)
        liczbaPoprawnychKombinacji++
      }
    }
  }
}

const end = new Date().getTime()
console.log('Liczba kombinacji ' + liczbaKombinacji)
console.log('Liczba poprawnych kombinacji dla wiązanki 1 ' + liczbaPoprawnychKombinacjiDlaWiazanki1)
console.log('Liczba poprawnych kombinacji ' + liczbaPoprawnychKombinacji)
console.log('Sekund ' + (end - start) / 1000)

