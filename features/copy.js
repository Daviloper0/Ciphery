export async function copy(input) {
  try {
    console.log(input.value)
    await navigator.clipboard.writeText(input.value)
  } catch (err) {
    alert('Houve um problema ao copiar o texto. Tente copiar manualmente.')
  }
}
