export function switchColorMode() {
  let body = document.body;
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('websiteTheme', body.dataset.theme);
  let imageOnButton = document.querySelectorAll('app-tertiarybutton > img')
  for (let i = 0; i < imageOnButton.length; i++) {
    imageOnButton[i].src = imageOnButton[i].src.replaceAll(`${body.dataset.theme === 'dark' ? 'light' : 'dark'}`, `${body.dataset.theme}`);
  }
}

export function autoSwitchColorModeIfPossible() {
  if (localStorage.getItem('websiteTheme') !== null) {
    if (document.body.dataset.theme !== localStorage.getItem('websiteTheme')) switchColorMode()
    return
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    switchColorMode();  
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    switchColorMode();
  });
}