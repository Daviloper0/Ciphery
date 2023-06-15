export class LongInput extends HTMLElement{
  constructor() {
    super();
    this.initialText = "";
  }
  connectedCallback() {
    this.initialText = this.getAttribute("initialText") === null ? "" : this.getAttribute("initialText");
    this.render();
  }
  render() {
    this.innerHTML = `
      <input type="text" value="${this.initialText}">
    `
  }
}
export class ShortInput extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <input type="text">
    `
  }
}