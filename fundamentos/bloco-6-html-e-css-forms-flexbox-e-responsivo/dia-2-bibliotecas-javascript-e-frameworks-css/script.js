function handleSubmit(event) {
  event.preventDefault();
}
window.onload = function () {
  let botaoEnvio = document.querySelector('#botao-envio');
  botaoEnvio.addEventListener('click', handleSubmit);
};

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

window.onload = function () {
  const apagar = document.querySelector('#apagar-botao');
  apagar.addEventListener('click', clearFields);
  const btnEnvio = document.querySelector('#botao-envio');
 btnEnvio.addEventListener('click', handleSubmit);
};

// A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
// Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.