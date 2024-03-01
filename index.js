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
  // Build up the element we want to create
  let tag = `<${elementInput.value} id="key-${elementKey}">${textInput.value}<${elementInput.value}/>`
  // Place it in the DOM
  document.getElementById(`div-${targetDiv.value}`).insertAdjacentHTML(beforeAfter.value, tag);

  // Build up that item's associated removal option.
  // Assigning uniquely associated data to be used for retrieval later.
  let optionTag = `<option id="${elementKey}" value="${elementKey}">divKey_${targetDiv.value}-elementKey_${elementKey}-elementType_${elementInput.value}<option/>`
  // Place it
  removalSelector.insertAdjacentHTML("beforeend", optionTag);
});

removeButton.addEventListener("click", () => {
  // Remove 
  document.getElementById(`key-${removalSelector.value}`).remove();
  document.getElementById(removalSelector.value).remove();
});