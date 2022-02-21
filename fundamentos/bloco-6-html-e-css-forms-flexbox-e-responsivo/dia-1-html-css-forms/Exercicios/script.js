// function handleSubmit(event) {
//   event.preventDefault();
//  }

window.onload = function () {
  const botaoEnvio = document.querySelector('#botao-envio');
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
  const clearBtn = document.querySelector('#limpar-botao');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#botao-envio');
  submitBtn.addEventListener('click', handleSubmit);
};

function enableSubmit() {
  const submitBtn = document.querySelector('#botao-envio');
  const agreement = document.querySelector('#aceitar-divulgar');
  submitBtn.disabled = !agreement.checked;
}

window.onload = function() {
    const agreement = document.querySelector('#aceitar-divulgar');
  agreement.addEventListener('change', enableSubmit);
};

function textInputValidation() {
  let name = document.querySelector('#nome-completo').value.length;
  let nametamanho = name < 10 || name > 40;

  let email = document.querySelector('#email').value.length;
  let emailtamanho = email < 10 || email > 50;

  let text = document.querySelector('#porque').value.length;
  let texttamanho = text > 500;
  if(nametamanho || emailtamanho || texttamanho) {
    false
  }
  else {
    true
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}