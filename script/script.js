//#region  functions
function buildCharSelector(selectElem) {
    for (let i = 97; i < 123; i++) {
        let option = document.createElement("option");
        option.innerHTML = String.fromCharCode(i);
        option.value = String.fromCharCode(i);
        selectElem.appendChild(option);
    }
    return selectElem;
}
//#endregion
//#region declaring variables
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const registerUsername = document.querySelector("#registerUsername");
const registerPassword = document.querySelector("#registerPassword");
const charSelector = buildCharSelector(document.querySelector("#charSelector"));
const insertButton = document.querySelector("#insertButton");
const insertUppercaseButton = document.querySelector("#insertUppercaseButton");
const passwordCharcodeBox = document.querySelector("#passwordCharcodeBox");
const insertCharcodeButton = document.querySelector("#insertCharcodeButton");
const clearPassword = document.querySelector("#clearPassword");
const clearUsername = document.querySelector("#clearUsername");
const yearSlider = document.querySelector("#ageSliderYear");
const yearSliderValue = document.querySelector("#ageYearSliderValue");
const ageMonthSliderValue = document.querySelector("#ageMonthSliderValue");
const monthSlider = document.querySelector("#ageSliderMonth");
const daySlider = document.querySelector("#ageSliderDay");
const ageDaySliderValue = document.querySelector("#ageDaySliderValue");
const submitButton = document.querySelector("#registerSubmit");
//#endregion
//#region evenlisteners
insertButton.addEventListener("click", () => {
    registerUsername.innerHTML += charSelector.value;
});
insertUppercaseButton.addEventListener("click", () => {
    registerUsername.innerHTML += charSelector.value.toUpperCase();
});
insertCharcodeButton.addEventListener("click", () => {
    registerPassword.innerHTML += String.fromCharCode(parseInt(passwordCharcodeBox.value, 10));
});
clearPassword.addEventListener("click", () => {
    registerPassword.innerHTML = "";
});
clearUsername.addEventListener("click", () => {
    registerUsername.innerHTML = "";
});
yearSlider.addEventListener("input", () => {
    yearSliderValue.innerHTML = yearSlider.value;
});
monthSlider.addEventListener("input", () => {
    ageMonthSliderValue.innerHTML = months[monthSlider.value];
});
daySlider.addEventListener("input", () => {
    ageDaySliderValue.innerHTML = daySlider.value;
});
submitButton.addEventListener("click", () => {
    submitButton.style.position = "absolute";
    submitButton.style.top = `${Math.floor(Math.random() * 1000)}px`;
    submitButton.style.left = `${Math.floor(Math.random() * 500)}px`;
});
//#endregion
