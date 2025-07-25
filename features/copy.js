export async function copy(input) {
  try {
    await navigator.clipboard.writeText(input.value).then(() => {
      alert('Senha copiada.')
    })
  } catch (err) {

    alert('Houve um problema ao copiar o texto. Tente copiar manualmente.')
  }
}
