const sum = 5 + 10;
let result = false;

if (sum % 3 == 0){
    console.log('야호3');
    result = true;
}

if (sum % 5 == 0) {
    console.log('야호5');
    result = true;
}

console.log(result);