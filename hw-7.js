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

