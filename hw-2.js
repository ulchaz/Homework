let a = 10;
alert(a); 

a = 20;
alert(a); 

let year = 2007;
alert("Год выпуска первого iPhone - " + year)

let name = "Брендан Эйх";
alert("Имя создателя языка JavaScript - " + name)

let m = 10;
let n = 2;
alert("сумма - " + (m + n));
alert("разность - " + (m - n));
alert("произведение - " + (m * n));
alert("частное - " + (m / n));

let result = 2;
alert(result**5);

let c = 9;
let b = 2;
alert(c%b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
  
user["city of residence"] = "New York";
  
user.age = 35;

delete user["city of residence"];
  

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let userName = prompt('Ваше имя');
alert("Привет, " + userName + " !")