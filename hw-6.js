//задание 1

let num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  if (num[i] === 10) {
    break;
  }
}


//задание 2

const index = [1, 5, 4, 10, 0, 3]

console.log(index.indexOf(4))

//задание 3 

const joinNum = [1, 3, 5, 10, 20];

console.log(joinNum.join(' '));

//задание 4

const arr = [];
for (let m = 0; m < 3; m++) {
  arr[m] = [];
  for (let j = 0; j < 3; j++) {
    arr[m][j] = 1;
  }
}
console.log(arr);

//задние 5

const numPush = [1, 1, 1];
numPush.push(2, 2, 2);
console.log(numPush);


//задние 6

let numSort = [9, 8, 7, 'a', 6, 5];
numSort.sort((a, b) => a - b);
numSort = numSort.filter(item => typeof item === 'number');
console.log(numSort);

//задание 7

const number = [9, 8, 7, 6, 5];
const userNumber = prompt("Угадайте число");

if (number.includes(parseInt(userNumber))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//задание 8

const letters = 'abcdef'
let str = letters.split('');
let str2 = str.reverse();
let str3 = str2.join('');
console.log(str3);

//задание 9 

const joinArr = [[1, 2, 3], [4, 5, 6]];

const result = joinArr.flat();
console.log(result);

//задание 10

const sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let s = 0; s < sumArr.length - 1; s++){
    const sum = sumArr[s] + sumArr[s+1];
    console.log(`Сумма ${sumArr[s]} и ${sumArr[s+1]} равна ${sum}`)
} 

//задание 11

function square(arr){
const squaredArr = arr.map(a => a * a);
return squaredArr;
}
const input = [2, 5, 3, 8];
const squaredArray = square(input);
console.log(squaredArray);

//задание 12

function length(arr){
    const lengthWord = arr.map(word =>word.length);
    return lengthWord;
    }
    const inputWord = ['слово', '', 'слог', 'длинное предложение', 'буква'];
    const lengthWord = length(inputWord);
    console.log(lengthWord);

//задание 13

function filterPositive(arr) {
const negativeNum = arr.filter(b => b < 0);
return negativeNum;
  }
  console.log(filterPositive([-1, 0, 5, -10, 56])); 
  console.log(filterPositive([-25, 25, 0, -1000, -2]));


