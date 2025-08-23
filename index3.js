const a = [15,20,10,4,15]; // 5
const arr = [3, 7, -2, 10, 0, 5];

// 1. while ციკლით
let i = 0;
let sumWhile = 0;
while (i < arr.length) {
    sumWhile += arr[i];
    i++;
}
console.log("while ჯამი:", sumWhile);


let lowestNumber = a[0];

for (let i = 1; i < a.length; i++) {


    if(
        a[i] < lowestNumber
    ) {
        lowestNumber = a[i];
    }
}

console.log(lowestNumber, ' LOWEST_NUMBER')