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

//задание 8

let nowDate = new Date();
console.log(nowDate);

//задание 9

const currentDate = new Date;
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + "." + "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(fullDate); 

//игра месяцы

function gameSeason() {
  let month = prompt('Введите номер месяца');
  if (month >= 1 && month <= 12) {
      if (month >= 3 && month <= 5) {
          alert ("Весна");
      } else if (month >= 6 && month <= 8) {
          alert ("Лето");
      } else if (month >= 9 && month <= 11) {
          alert ("Осень");
      } else {
          alert ("Зима");
      }
  } else {
      alert ("Неправильный номер месяца");
  }
}



//игра слова

function randomFruits() {
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  fruits.sort(function() {
    return 0.5 - Math.random();
  });

  alert(fruits.join(', '));

  var firstUserFruits = prompt('Чему равнялся первый элемент массива?');
  var lastUserFruits = prompt('Чему равнялся последний элемент массива?');

 
  if (firstUserFruits === fruits[0].toLowerCase() && lastUserFruits === fruits[fruits.length - 1].toLowerCase()) {
    alert('Поздравляем! Вы угадали оба слова!');
  } else if (firstUserFruits === fruits[0].toLowerCase() || lastUserFruits === fruits[fruits.length - 1].toLowerCase()) {
    alert('Вы были близки к победе!');
  } else {
    alert('Вы ответили неверно.');
  }
}


