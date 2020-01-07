

//const znaki = '12345()+-*'

const znaki = ['1','2','3','4','5','(',')','*','+','-']

let zlicz = 0

function permutacjeBezPowtorzen(kombinacja) {
  if (kombinacja.length === znaki.length) {
    //console.log(kombinacja)
    try {
      if (eval(kombinacja) === 88){
        console.log(kombinacja + '=' + eval(kombinacja))
        zlicz++
      }
    } catch (error) {
      //console.log('Zlapalem blad na kombinacji ' + kombinacja)
    }
    return
  }

  znaki.forEach(znak => {
    if (kombinacja.indexOf(znak) === -1){
      permutacjeBezPowtorzen(kombinacja + znak)
    }
  })
}

permutacjeBezPowtorzen('')

console.log('Liczba kombinajci ' + zlicz)



//console.log('koniec')



