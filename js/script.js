// Scrivi un programma che stampi i numeri da 1 a 100

for(let i = 1; i<=100; i++) {

// Per prima cosa assegno Fizzbuzz ai multipli comuni
  if(i % 15 === 0){
    let i = "Fizzbuzz"
    console.log(i)
  }
  //procedo poi per i multipli esclusivi di 3 e 5
  else if(i % 5 === 0){
    let i = "Buzz"
    console.log(i)
  }

}

