function countNumber (numbers, find){
let count = 0;
for (let num of numbers) {
    // console.log(num);
    if (num === find) {
        count++;
    }
}
return count ;
}
let output = countNumber([5, 6, 11, 12, 98, 5], 5);
console.log( "find-5",output, "times" );