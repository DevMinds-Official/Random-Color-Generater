let container = document.querySelector(".container");
let childContainer = document.querySelector(".childContainer");
let child = document.querySelector(".child");

function setContainerColor() {
  let value1 = Math.floor(Math.random() * 256);
  let value2 = Math.floor(Math.random() * 256);
  let value3 = Math.floor(Math.random() * 256);

  container.style.backgroundColor = `rgb(${value1} , ${value2} , ${value3}`;
}

function setchildContainerColor() {
  let value1 = Math.floor(Math.random() * 256);
  let value2 = Math.floor(Math.random() * 256);
  let value3 = Math.floor(Math.random() * 256);

  childContainer.style.backgroundColor = `rgb(${value1} , ${value2} , ${value3}`;
}

function setchildColor() {
  let value1 = Math.floor(Math.random() * 256);
  let value2 = Math.floor(Math.random() * 256);
  let value3 = Math.floor(Math.random() * 256);

  child.style.backgroundColor = `rgb(${value1} , ${value2} , ${value3}`;
}

function ColorGenerator() {
  setContainerColor();
  setchildContainerColor();
  setchildColor();
}
