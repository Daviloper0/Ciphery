//TODO: adicionar os metodos de encript
export function MD5Encrypt(string) {
  return CryptoJS.MD5(string).toString();
}
export function SHA1Encrypt(string) {
  return CryptoJS.SHA1(string).toString();
}
export function BASE64Encrypt(string) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(string))
}