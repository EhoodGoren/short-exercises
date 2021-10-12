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


console.log("first call");
setTimeout(()=>{
    console.log("second call");
}, 2000);
console.log("third call");
// first call > third call > second call

let changesCounter = 0;
function changeColor(time, color, callback, reject){
    if(time<1000){
        time = 1000;
    }
    if(changesCounter >= 3){
        console.log("Reached max attempts");
        return
    }
    setTimeout(() => {
        const rnd = Math.floor(Math.random() * 10) + 1;
        const body = document.querySelector("body");
        if(rnd > 0){
            changesCounter++;
            callback()
            body.style.backgroundColor = color;
        }
        else{
            console.log("your request was rejected ☹")
            reject()
        }
    }, time)
}

changeColor(1000, "green", () => {
    changeColor(1000, "red", () => {
        changeColor(1000, "blue", () => {
        }, () => {
            console.log("failed with blue");
        });
    }, () => {
        console.log("failed with red");
    })
}, () => {
    console.log("failed with green");
});
