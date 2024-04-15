let counterValue = 0;

const counter = document.getElementById("counter");
const value = document.querySelector("#value");

counter.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'decrement') {
      counterValue--;
    } else if (event.target.dataset.action === 'increment') {
      counterValue++;
    }
    
    value.innerText = counterValue;
  });
