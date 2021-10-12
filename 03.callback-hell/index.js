function pythagoras (num1, num2, num3){
    return sqr(num1) + sqr(num2) === sqr(num3);
}

function sqr (num){
    return product(num, num);
}

function product (num1, num2){
    return num1*num2;
}

const triangle = pythagoras(3,4,5);
console.log(triangle);
