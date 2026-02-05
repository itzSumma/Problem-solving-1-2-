/**
 * Write a function to count the number of vowels in a string.


 */

function countVowels(string){
    string=string.toLowerCase();
    let count = 0;
    const vowels = "aeiou";
    for( let character of string ){
        if(vowels.includes(character))
        count++;

    }
    return count;

}
let output= countVowels("JavaScript Is Fun! Let's Count Vowels: AEIOU aeiou");
console.log(output)