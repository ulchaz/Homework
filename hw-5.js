//задание 1

function minNum (num1, num2) {
    if (num1 > num2) {
        return num2;
    } else {
        return num1;
    }
}

console.log(minNum(8,4));
console.log(minNum(6,6));

//задание 2

function evenNum (num) {
    if (num % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(evenNum(8));
console.log(evenNum(5));


//задание 3

//3.1

function printNum (number) {
    console.log(number * number);
}

printNum(5);

//3.2

function returnNum (number) {
    return number * number;
}

printNum(5);

console.log(returnNum(5));



