import { PrimaryButton, SecondaryButton, TertiaryButton } from "./buttons.js"; 
import { copy } from "./copy.js";
import { BASE64Encrypt, MD5Encrypt, SHA1Encrypt } from "./encrypt.js";
import { LongInput, ShortInput } from "./input.js";
import { autoSwitchColorModeIfPossible } from "./switchColorMode.js";
createCustomElements();
autoSwitchColorModeIfPossible();

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
  
  generateHashPassword(passwordInput.value);
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
export function generateHashPassword(passwordString) {
  let type = document.querySelector('app-secondarybutton[data-set="cryptography"][data-selected="true"]').content
  let hashOutput = document.querySelector('app-longinput[data-selectable="false"] > input')
  let encryptedResult = '';
  
  if (type === 'MD5') encryptedResult = MD5Encrypt(passwordString);
  if (type === 'SHA-1') encryptedResult = SHA1Encrypt(passwordString);
  if (type === 'BASE64') encryptedResult = BASE64Encrypt(passwordString);

  hashOutput.value = encryptedResult;
}

document.querySelector('app-primarybutton#generate').addEventListener('click', () => {generatePassword()});
document.querySelector('app-primarybutton#copy').addEventListener('click', () => {copy(document.querySelector('app-longinput[data-selectable="false"] > input'))});
document.querySelector('app-longinput#nonEncryptedPassword > input').addEventListener('keyup', () => {generateHashPassword(document.querySelector('app-longinput#nonEncryptedPassword > input').value)});

function createCustomElements() {
  customElements.define('app-primarybutton', PrimaryButton);
  customElements.define('app-secondarybutton', SecondaryButton);
  customElements.define('app-tertiarybutton', TertiaryButton);
  customElements.define('app-longinput', LongInput);
  customElements.define('app-shortinput', ShortInput);  
};
generatePassword();