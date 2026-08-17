function odsAvarage(numbers) {
  let odds = [];
  for (let number of numbers) {
    //   console.log(number)
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  // console.log(odds);
  let sum = 0;
  for (let number of odds) {
    sum += number;
  }
  let count = odds.length;
  let avarage = sum / count;

  return {
    sum,
    avarage,
  };
}
let output = odsAvarage([42, 13, 58, 65, 81, 96, 7]);
console.log("Total sum :", output.sum);
console.log("Avarage :", output.avarage);

const user = {
  name: "Sharmin",
  role: "Developer",
  skills: ["React", "Node", "TypeScript"],
  age: 22,
};

function calculateTotal(a, b, c) {
  const result = a + b + c;
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(user, calculateTotal(10, 20, 30));
