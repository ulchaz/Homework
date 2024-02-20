//задание 1

let str = 'js';
console.log(str.toUpperCase()); 

//задание 2


function searchStart(arr, str) {
    const result = arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    return result;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['Кошка', 'Комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

//задание 3

console.log( Math.floor(32.58884));
console.log(Math.ceil(32.58884))
console.log(Math.round(32.58884));

//задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//задание 5

function getRandomInt(minValue, maxValue) {
return Math.random() * maxValue;
}
console.log(
getRandomInt(0,10));

//задание 6 

function randomNumbers(num) {
    const length = Math.floor(num / 2); 
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * (num + 1))); 
    }
    return arr;
  }
    console.log(randomNumbers(7)); 
    console.log(randomNumbers(12)); 

//задание 7

function randomNum(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(result);
}
randomNum(1, 10); 

    

