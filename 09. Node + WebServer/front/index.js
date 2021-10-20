const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", handleSubmit);

async function handleSubmit(event){
    if(!checkInputs()) return
    const response = await axios.post();
}

function checkInputs(){
    const formInputs = document.querySelectorAll(".form_inputs")
    // Checks if one of the inputs if empty
    for(let input of formInputs){
        if(input.value === ""){
            alert(`Please fill ${input}!`);
            return false
        }
    }
    return true;
}

