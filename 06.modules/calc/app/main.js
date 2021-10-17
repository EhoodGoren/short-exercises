import style from "./styles.css";
import * as math from "./helpers/math";
import * as state from "./helpers/state";


const numField = document.querySelector(".result");
const operations = ["+", "-", "X", "/", "="];

const calcContainer = document.querySelector(".container");
calcContainer.addEventListener("click", calcClick);

function calcClick(event){
    if(! event.target.type === "button") return;

    const clickedKey = event.target.value;
    if(!isNaN(clickedKey)){
        displayNum(clickedKey);
    }
    else {
        for(let operation of operations){
            if (operation === clickedKey){
                handleOperation(clickedKey);
            }
        }
    }
}

function displayNum(num){
    numField.value = numField.value + num;
}

function handleOperation(operation){
    if(numField.value === "") return;
    saveNumber();
    switch(operation){
        case "+":
            state.state.callBack = math.add;
            break;
        case "-":
            state.state.callBack = math.sub;
            break;
        case "X":
            state.state.callBack = math.multiply;
            break;
        case "/":
            state.state.callBack = math.divide;
            break;
        case "=":
            evaluate();
            break;
    }
}

function saveNumber(){
    if(state.state.firstNumber === ""){
        state.state.firstNumber = numField.value;
    }
    else{
        state.state.secondNumber = numField.value;
    }
    numField.value = "";
}

function evaluate(){
    if(state.state.secondNumber !== ""){
        numField.value = math.equals(parseInt(state.state.firstNumber), parseInt(state.state.secondNumber), state.state.callBack);
    }
}
