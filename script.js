
//cria variaveis para cada elemento
  let capital = document.getElementById("inpCapital");
  let taxa = document.getElementById("inpTaxa");
  let periodo = document.getElementById("inpPeriodo");
  let calcular = document.getElementById("btnCalcular");
  let resultado = document.getElementById("txtResultados");
  let limpar = document.getElementById("btnLimpar");



  //acessar valor dos elementos

  function fResultado(){
      
    let resCalc = "R$ " + (capital.value * ((1+taxa.value/100) ** periodo.value)).toFixed(2);
      resultado.textContent = resCalc;
  }

  function fLimpar(){
    capital.value = "";
    taxa.value = "";
    periodo.value = "";
    resultado.innerText = "";
}





  calcular.addEventListener('click', fResultado);

  limpar.addEventListener('click', fLimpar);

