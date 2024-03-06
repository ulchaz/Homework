

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




let m = '2';
let n = '3';
alert((Number(m)) +(Number(n) ));



let monthNumber = 98;
let season;

if( monthNumber > 12) {
  console.log("некорректный номер месяца");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log('Зима');
      break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
      break;Весна
    case 6:
    case 7:
    case 8:
        console.log('Лето');
      break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
      break;
    default:
      console.log("некорректный номер месяца");
  }


}

