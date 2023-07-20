  function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getSelection('div#res')
  }
  if( fano.value.length == 0 || fano.value > ano ){

    window.alert('[ERRO] Verifique os dado e tente novamente !')

  }else