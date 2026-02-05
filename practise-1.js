function odsAvarage(numbers){
let odds = [];
    for ( let number of numbers){
    //   console.log(number)
        if(number % 2 !== 0){ 
           odds.push(number)
           }
    }
    // console.log(odds);
    let sum = 0;
    for ( let number of odds){
        sum += number;
      
    }
    let count = odds.length;
    let avarage = sum / count; 

   return{
    sum,
    avarage
   }
}
 let output=odsAvarage([42, 13, 58, 65, 81, 96, 7])
console.log("Total sum :", output.sum,);
  console.log  ("Avarage :", output.avarage);