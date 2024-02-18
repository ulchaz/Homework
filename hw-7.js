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
