function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");

controls.addEventListener("click", (event) => {
if (event.target.dataset.create) {
const input = controls.querySelector("input");
const amount = parseInt(input.value);
createBoxes(amount);
}

if (event.target.dataset.destroy) {
destroyBoxes();
}
});

function createBoxes(amount) {
for (let i = 0; i < amount; i++) {
const box = document.createElement("div");
box.style.width = "${30 + i * 10}px";
box.style.height = "${30 + i * 10}px";
box.style.backgroundColor = getRandomHexColor();
boxes.appendChild(box);
}
}

function destroyBoxes() {
boxes.innerHTML = "";
}

