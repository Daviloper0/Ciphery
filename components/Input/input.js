export class LongInput extends HTMLElement{
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
export class ShortInput extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <input type="text" value="8">
    `
  }
}