console.log('START')
let liczbaKombinacji = 0
let liczbaLiczbPierwszych = 0

for (let kandydat = 2; kandydat < 1000000; kandydat++) {
  let warunekSpelniony = false
  for (let dzielnik = 2; dzielnik <= (kandydat / 2); dzielnik++) {
    if (kandydat % dzielnik === 0) {
      warunekSpelniony = true
      break
    }
    liczbaKombinacji++
  }
  if (!warunekSpelniony) {
    liczbaLiczbPierwszych++
    console.log('liczba pierwsza to ' + kandydat)
  }
}
console.log('Liczb pierwszych jest ' + liczbaLiczbPierwszych)
console.log('Liczba kombinacji ' + liczbaKombinacji)

/*
liczba pierwsza to 999983
Liczb pierwszych jest 78498
Liczba kombinacji 18791243229
 */
