import { switchColorMode } from "./switchColorMode.js";
import { copy } from "./copy.js";
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
    this.render();
  }
  

  getDoFunctions(doCall) {
    const functions = {
      'switchColorMode': () => {switchColorMode()},
      'copy': () => {copy()}
    }
    return functions[`${doCall}`]
  }
  render() {
    this.innerHTML = `<img src="./${this.imageSource}">`;
  }
}