//задание 1 
let i = 0;

while (i < 2) {
	console.log("Привет");
	i++;
}

//задание 2

 
let a = 1;

while (a < 6) {
	console.log(a);
	a++;
}

// задание 3

let b = 7;

while (b < 23){
    console.log(b);
    b++;

}

//задание 4 

let obj = {
	"Коля": "200",
	"Ваня": "300",
	"Петя": "400"
};
for(let key in obj){
	console.log(`${key} - зарплата ${obj[key]} долларов`);
}
