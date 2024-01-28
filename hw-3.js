

let password = "qwerty123";
let a = prompt('Введите пароль');
if (a === password){
    alert('Пароль введен верно')
}
else{
    alert('Пароль введен неправильно')
}

let c = 2;
if (c > 0 && c < 10){
    console.log('Верно')
}
else{
    console.log('Неверно')
}

let d = prompt('Введите число');
let e = prompt('Введите еще число');
if (d > 100 || e > 100){
    alert('Верно')
}
else{
    alert('Неверно')
}