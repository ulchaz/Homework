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

let arr = [];
for (let m = 0; m < 3; m++) {
  arr[m] = [];
  for (let j = 0; j < 3; j++) {
    arr[m][j] = 1;
  }
}
console.log(arr);