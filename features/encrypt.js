export function generateHashPassword(passwordString) {
  const encryption = {
    outputElement: document.querySelector('app-longinput[data-selectable="false"] > input'),
    type: document.querySelector('app-secondarybutton[data-set="cryptography"][data-selected="true"]').content,
    list: {
      'MD5': MD5Encrypt(passwordString),
      'SHA-1': SHA1Encrypt(passwordString),
      'BASE64': BASE64Encrypt(passwordString)
    },
    result: ''
  }
  encryption.outputElement.value = encryption.list[`${encryption.type}`];
}
function MD5Encrypt(string) {
  return CryptoJS.MD5(string).toString();
}
function SHA1Encrypt(string) {
  return CryptoJS.SHA1(string).toString();
}
function BASE64Encrypt(string) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(string))
}