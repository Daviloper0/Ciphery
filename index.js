import { PrimaryButton, SecondaryButton, TertiaryButton } from "./buttons.js"; 
import { LongInput, ShortInput } from "./input.js";
//TODO: AUTO GENERATE PASSWORD WHEN ENTER WEBSITE

function generatePassword() {
  let passwordInput = document.querySelector('app-longinput#nonEncryptedPassword > input');
  let passwordLenght = document.querySelector('app-shortinput > input').value === '' ? 8 : document.querySelector('app-shortinput > input').value;
  let options = document.querySelectorAll('app-secondarybutton[data-set="options"][data-selected="true"]') ?? document.querySelector('app-secondarybutton[data-set="options"]');
  let finalPassword = "";
  for (let i = 0; i < passwordLenght; i++) {
    let randomChar = getRandomCharacter(options);
    finalPassword += String.fromCharCode(randomChar);
  }
  passwordInput.value = finalPassword;
}
function getRandomCharacter(options) {
  let randomOption = getRandomNumber(0, options.length);
  let minChar = options[randomOption].dataset.start;
  let maxChar = options[randomOption].dataset.end;
  let randomChar = getRandomNumber(minChar, maxChar);
  return randomChar;
}
function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
}
document.querySelector('app-primarybutton#generate').addEventListener('click', () => {generatePassword()})
customElements.define('app-primarybutton', PrimaryButton);
customElements.define('app-secondarybutton', SecondaryButton);
customElements.define('app-tertiarybutton', TertiaryButton);
customElements.define('app-longinput', LongInput);
customElements.define('app-shortinput', ShortInput);