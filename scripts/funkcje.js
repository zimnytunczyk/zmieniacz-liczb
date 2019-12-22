
const name = 'Franek'

function xdLol(name) {
  console.log('hehehehehehehehehehe ' + name)
}

xdLol('Bolek')
xdLol(name)
xdLol('Olek')

const dodawanie = function (x, y) {
  return x + y
}

const odejmowanie = function (x, y) {
  return x -y
}

function dzialanie(x, y, operacja) {
  console.log('wynik ' + operacja(x,y))
}

dzialanie(5, 3, dodawanie)
dzialanie(5, 3, odejmowanie)



console.log(dodawanie(5, 7))


let wynik = dodawanie(10,11)
console.log(wynik)

function silnia(liczba) {
  let r = liczba
  for (let i = --liczba; i >= 1; i--){
    //console.log(i)
    r = r * i
  }
  return r
}

function silniaRekurencja(liczba) {
  if (liczba === 1) {
    return liczba
  } else {
    return liczba * silniaRekurencja(--liczba)
  }
}

console.log('silnia od 10! ' + silnia(10))
console.log('silnia od 4! ' + silnia(4))
console.log('silnia od 2! ' + silnia(2))
console.log('silnia od 1! ' + silnia(1))

console.log('silnia od 10! ' + silniaRekurencja(10000))
console.log('silnia od 4! ' + silniaRekurencja(4))
console.log('silnia od 2! ' + silniaRekurencja(2))
console.log('silnia od 1! ' + silniaRekurencja(1))

dzialanie(10, 10, (x, y) => { return x * y })

