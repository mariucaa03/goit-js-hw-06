const fontSizeControl =  document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", function(){
    const userSize = this.value;
    text.style.fontSize = userSize + "px";
})