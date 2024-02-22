let container = document.getElementById("container");
let classInput = document.getElementById("classes");
let elementInput = document.getElementById("elements");
let textInput = document.getElementsByClassName("textInput")[0];
let targetDiv = document.getElementById("targetDiv");
let beforeAfter = document.getElementById("afterBeginBeforeEnd");
let submit = document.getElementsByClassName("submit")[0];
let removalSelector = document.getElementById("removalSelector");
let removeButton = document.getElementsByClassName("remove")[0];
let elementKey = 0;

const COLORS = ["red", "blue", "green", "yellow", "orange"];

submit.addEventListener("click", () => {
  elementKey++;
  let tag = `<${elementInput.value} id="key-${elementKey}">${textInput.value}<${elementInput.value}/>`
  console.log("textInput: " + textInput.value);
  document.getElementById(`div-${targetDiv.value}`).insertAdjacentHTML(beforeAfter.value, tag);

  let optionTag = `<option id="optionKey-${elementKey}" value="${elementKey}">${elementKey}<option/>`
  removalSelector.insertAdjacentHTML("beforeend", optionTag);
});

removeButton.addEventListener("click", () => {
  document.getElementById(`key-${removalSelector.value}`).remove();
  document.getElementById(`optionKey-${removalSelector.value}`).remove();
});