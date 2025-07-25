export class LongInput extends HTMLElement{
  constructor() {
    super();
    this.inputid = "";
  }

  connectedCallback() {
    this.inputid = this.getAttribute("input-id") === null ? "" : this.getAttribute("input-id");
    this.render();
  }

  render() {
    this.innerHTML = `
      <input type="text" id ="${this.inputid}">
    `
  }
}
export class ShortInput extends HTMLElement {
  constructor() {
    super();
    this.inputid = ""
  }
  connectedCallback() {
    this.inputid = this.getAttribute("input-id") === null ? "" : this.getAttribute("input-id");
    this.render();
  }
  render() {
    this.innerHTML = `
      <input type="text" value="8" id="${this.inputid}">
    `
  }
}