const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    if(!checkInputs()) return
    const inputs = getInputs();
    const response = await axios.post("http://localhost:9000", inputs);
}

function checkInputs(){
    const formInputs = document.querySelectorAll(".form_inputs")
    // Checks if one of the inputs if empty
    for(let input of formInputs){
        if(input.value === ""){
            alert(`Please fill ${input.name}!`);
            return false
        }
    }
    return true;
}

function getInputs(){
    const inputs = document.querySelectorAll(".form_inputs");
    return {
        name: inputs[0].value,
        age: inputs[1].value,
        ability: inputs[2].value,
    }
}

