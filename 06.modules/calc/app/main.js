import style from "./styles.css";
import * as math from "./helpers/math";

const calcContainer = document.querySelector(".container");
calcContainer.addEventListener("click", calcClick);

function calcClick(event){
    if(! event.target.type === "button") return;
    if(!isNaN(event.target.value)){
        const num = event.target.value;
        const numField = document.querySelector(".result");
        numField.value = numField.value + num;
    }
}
