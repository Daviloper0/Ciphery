import { generateHashPassword } from "../features/encrypt.js";
import { generatePassword } from "../features/generatepassword.js";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Buttons/buttons.js";
import { LongInput, ShortInput } from "./Input/input.js";

export function createCustomElements() {
  customElements.define('app-primarybutton', PrimaryButton);
  customElements.define('app-secondarybutton', SecondaryButton);
  customElements.define('app-tertiarybutton', TertiaryButton);
  customElements.define('app-longinput', LongInput);
  customElements.define('app-shortinput', ShortInput);  
  addCustomElementsEvents();
};
function addCustomElementsEvents() {
  let elements = {
    generate: document.querySelector('app-primarybutton#generate'),
    copy:  document.querySelector('app-primarybutton#copy'),
    password: document.querySelector('app-longinput#nonEncryptedPassword > input')
  }
  elements.generate.addEventListener('click', () => {
    generatePassword();
  });
  elements.copy.addEventListener('click', () => {
    copy(document.querySelector('app-longinput[data-selectable="false"] > input'));
  });
  elements.password.addEventListener('keyup', () => {
    generateHashPassword(elements.password.value);
  });
}