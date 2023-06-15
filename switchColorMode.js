export function switchColorMode() {
  let body = document.querySelector('body');
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
  let imageOnButton = document.querySelectorAll('app-tertiarybutton > img')
  for (let i = 0; i < imageOnButton.length; i++) {
    imageOnButton[i].src = imageOnButton[i].src.replaceAll(`${body.dataset.theme === 'dark' ? 'light' : 'dark'}`, `${body.dataset.theme}`);
  }
}