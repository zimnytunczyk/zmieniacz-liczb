console.log('START');

for(let i = 201; i < 240; i++) {
  if (i % 2 === 1 && i % 3 === 2 && i % 4 === 3 && i % 5 === 4 && i % 6 === 5) {
    console.log('Liczba schodów to ' + i);
  }
}

/*

T,F

T && T => t  AND (i)
T && F => f
F && T => f
F && F => f

T || T => t OR (lub)
T || F => t
F || T => t
F || F => f

 */



















