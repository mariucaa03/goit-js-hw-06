const userInput = document.querySelector("#validation-input");

userInput.addEventListener("blur", function(){
    const expectedLength = parseInt(userInput.getAttribute("data-length"));
    const enteredLength = userInput.value.length;

    if(enteredLength === expectedLength){
        userInput.classList.remove("invalid");
        userInput.classList.add("valid");
    }
    else{
        userInput.classList.remove("valid");
        userInput.classList.add("invalid");
    }
})



