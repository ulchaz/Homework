//задание 1

let num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
  if (num[i] === 10) {
    break;
  }
  console.log(num[i]);
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