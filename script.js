// Seleciona os elementos do formulário.
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, "")

  // Transforma o valor em centavos.
  value = Number(value) / 100

  // Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
  // Formata o valor no padrão BRL.
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return value
}