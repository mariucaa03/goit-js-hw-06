const nameInput = document.querySelector("#name-input");

const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function(){
    if(nameInput.value.trim() === ""){
        nameOutput.textContent = "Anonymus"
    } 
    else{
nameOutput.textContent = nameInput.value;
    }
})


