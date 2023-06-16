import { switchColorMode } from "./switchColorMode.js";
import { copy } from "./copy.js";
import { generateHashPassword } from "./index.js";

export class PrimaryButton extends HTMLElement {
  constructor() {
    super();
    this.content = "";
  }
  connectedCallback() {
    this.content = this.getAttribute("content") !== null ? this.getAttribute("content") : "";
    this.render();
  }
  render() {
    this.innerHTML = `<p>${this.content}</p>`;
  }
}
export class SecondaryButton extends HTMLElement {
  constructor() {
    super();
    this.content = "";
    this.set = "";
  }
  connectedCallback() {
    this.content = this.getAttribute("content") === null ? "" : this.getAttribute("content");
    if (this.dataset.set === 'cryptography') {
      this.addEventListener('click', () => {
        document.querySelector('[data-selected="true"][data-set="cryptography"]').dataset.selected = false;
        this.dataset.selected = true;
        generateHashPassword(document.querySelector('app-longinput#nonEncryptedPassword > input').value)
      })
    }
    if (this.dataset.set === 'options') {
      this.addEventListener('click', () => {
        this.dataset.selected = this.dataset.selected == 'true' ? 'false' : 'true';
      })
    }

    this.render();
  }

  render() {
    this.innerHTML = `<p>${this.content}</p>`
  }
}
export class TertiaryButton extends HTMLElement {
  static get observedAttributes() {return ['source']}
  constructor() {
    super();
    this.imageSource = "";
    this.action = () => {};
  }
  attributeChangedCallback() {
    this.render()
  }
  
  connectedCallback() {
    this.imageSource = this.getAttribute("source") === null ? "" : this.getAttribute("source");
    if (this.getAttribute('do') !== null) this.addEventListener('click', () => {
      this.getDoFunctions(this.getAttribute('do'))()
    })
    if (this.getAttribute('linkTo') !== null) this.addEventListener('click', () => {
      window.open('https://github.com/Daviloper0', '_blank')
    })
    this.render();
  }

  getDoFunctions(doCall) {
    const functions = {
      'switchColorMode': () => {switchColorMode()},
      'copy': async () => {await copy(document.querySelector('app-longinput#nonEncryptedPassword > input'))}
    }
    return functions[`${doCall}`]
  }
  render() {
    this.innerHTML = `<img src=".${this.imageSource}">`;
  }
}