// Scrivi un programma che stampi i numeri da 1 a 100

for(let i = 1; i<=100; i++) {
  let message = i
  // Per prima cosa assegno Fizzbuzz ai multipli comuni
  if(i % 15 === 0){
    message = "FizzBuzz"
  }
  //procedo poi per i multipli esclusivi di 3 e 5
  else if(i % 5 === 0){
    message = "Buzz"
  } 
  else if(i % 3 === 0){
    message = "Fizz"
  }
  // infine stampo i numeri che non sono multipli di 3 o 5
  console.log(message)
}
