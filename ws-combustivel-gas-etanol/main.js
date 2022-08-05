function handleFormSubmit(e) {
  e.preventDefault();

  // Limpa as mensagens
  _clearMessages();


  let [_gasolina, _etanol] = e.target;

  gasolina = _gasolina.value.replace(',','.');
  etanol = _etanol.value.replace(',','.');

  
  if (etanol/gasolina > 0.8) {
    document.querySelector('.gasolina').classList.add('winner');
    _setWinner('GASOLINA')

  } else {
    document.querySelector('.etanol').classList.add('winner');
    _setWinner('ETANOL')
  }

  setTimeout(()=>{
    document.querySelectorAll('.winner').forEach(el => el.classList.remove('winner'));
  },2000);

}


function _clearMessages() {
  document.querySelector("#message-area").innerHTML = "";
  document.querySelectorAll('.winner').forEach(el => el.classList.remove('winner'));
};

function _setWinner(winner) {
  let result_li = document.createElement('li');
  result_li.style.color = '#FFFFFF';
  result_li.innerHTML = `É mais vantajoso abastecer com: ${winner}`;
  document.querySelector('#message-area').append(result_li);
}
