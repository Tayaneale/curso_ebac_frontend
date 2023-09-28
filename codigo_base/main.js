const form = document.getElementById('form-validacaonumerica');

function compararValores(campoA, campoB) {
  const maiorValor = campoB > campoA;
  return maiorValor;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const campoA = document.getElementById("campoA");
  const campoB = document.getElementById("campoB");
  const mensagemSucesso = `Formulário válido: O valor <b>${campoB.value}</b> presente no campo B é maior que o valor <b>${campoA.value}</b> presente no campo A!`;

  const formValido = compararValores(campoA.value, campoB.value);

  if (formValido) {
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';
  } else {
    campoB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }
})

campoB.addEventListener('keyup', function (e) {
  console.log(e.target.value);
  formValido = compararValores(campoA.value, campoB.value); 

  if (!formValido) {
    campoB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    campoB.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});

