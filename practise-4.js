/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function findLongestWord( sentence){
    let words = sentence.split(" ");
    let longestWord = "";
    // console.log(words)
   
    for(let word of words){
        // console.log(word)
//  console.log(word, word.length)
if (word.length > longestWord.length) {
    longestWord = word;
    
}

    }
    return longestWord;
   
        
    

}
let output= findLongestWord("I am learning Programming");
console.log("Longest word :", output);
console.log("Length :", output.length);