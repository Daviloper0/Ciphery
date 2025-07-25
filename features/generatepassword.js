import { generateHashPassword } from "./encrypt.js";

export function generatePassword() {
  let password = {
    input: document.querySelector('app-longinput[data-selectable="true"] > input'),
    length: document.querySelector('app-shortinput > input').value === '' ? 8 : document.querySelector('app-shortinput > input').value,
    options: document.querySelectorAll('app-secondarybutton[data-set="options"][data-selected="true"]') ?? document.querySelector('app-secondarybutton[data-set="options"]'),
    result: ""
  }
  for (let i = 0; i < password.length; i++) {
    password.result += String.fromCharCode(getRandomCharacter(password.options));
  }
  password.input.value = password.result;
  generateHashPassword(password.result);
}
function getRandomCharacter(options) {
  let randomOption = getRandomNumberBetween(0, options.length);
  let characters = options[randomOption].dataset;
  let randomChar = getRandomNumberBetween(characters.start, characters.end);
  return randomChar;
}
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}