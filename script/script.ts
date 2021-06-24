//#region  functions

function buildCharSelector(selectElem: HTMLSelectElement): HTMLSelectElement {
  for (let i = 97; i < 123; i++) {
    let option: HTMLOptionElement = document.createElement("option");
    option.innerHTML = String.fromCharCode(i);
    option.value = String.fromCharCode(i);
    selectElem.appendChild(option);
  }

  return selectElem;
}

//#endregion

//#region declaring variables

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const registerUsername: HTMLParagraphElement = document.querySelector("#registerUsername");
const registerPassword: HTMLParagraphElement = document.querySelector("#registerPassword");
const charSelector: HTMLSelectElement = buildCharSelector(document.querySelector("#charSelector"));
const insertButton: HTMLButtonElement = document.querySelector("#insertButton");
const insertUppercaseButton: HTMLButtonElement = document.querySelector("#insertUppercaseButton");
const passwordCharcodeBox: HTMLInputElement = document.querySelector("#passwordCharcodeBox");
const insertCharcodeButton: HTMLButtonElement = document.querySelector("#insertCharcodeButton");
const clearPassword: HTMLButtonElement = document.querySelector("#clearPassword");
const clearUsername: HTMLButtonElement = document.querySelector("#clearUsername");
const yearSlider: HTMLInputElement = document.querySelector("#ageSliderYear");
const yearSliderValue: HTMLParagraphElement = document.querySelector("#ageYearSliderValue");
const ageMonthSliderValue: HTMLParagraphElement = document.querySelector("#ageMonthSliderValue");
const monthSlider: HTMLInputElement = document.querySelector("#ageSliderMonth");
const daySlider: HTMLInputElement = document.querySelector("#ageSliderDay");
const ageDaySliderValue: HTMLParagraphElement = document.querySelector("#ageDaySliderValue");
const submitButton: HTMLInputElement = document.querySelector("#registerSubmit");
//#endregion

//#region evenlisteners

insertButton.addEventListener("click", (): void => {
  registerUsername.innerHTML += charSelector.value;
});

insertUppercaseButton.addEventListener("click", (): void => {
  registerUsername.innerHTML += charSelector.value.toUpperCase();
});

insertCharcodeButton.addEventListener("click", (): void => {
  registerPassword.innerHTML += String.fromCharCode(parseInt(passwordCharcodeBox.value, 10));
});

clearPassword.addEventListener("click", (): void => {
  registerPassword.innerHTML = "";
});

clearUsername.addEventListener("click", (): void => {
  registerUsername.innerHTML = "";
});

yearSlider.addEventListener("input", (): void => {
  yearSliderValue.innerHTML = yearSlider.value;
});

monthSlider.addEventListener("input", (): void => {
  ageMonthSliderValue.innerHTML = months[monthSlider.value];
});

daySlider.addEventListener("input", (): void => {
  ageDaySliderValue.innerHTML = daySlider.value;
});

submitButton.addEventListener("click", (): void => {
  submitButton.style.position = "absolute";
  submitButton.style.top = `${Math.floor(Math.random() * 1000)}px`;
  submitButton.style.left = `${Math.floor(Math.random() * 500)}px`;
});

//#endregion
