function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano ) {
     window.alert('Verifique os dados e tente novamente !')
  }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
          gênero = 'Mulher'
          if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-crianca-mulher.png')
          }else if (idade < 21 ) {
            //jovem
            img.setAttribute('src', 'foto-jovem-mulher.png')
          }else if (idade < 50 ) {
            //adulto
            img.setAttribute('src', 'foto-adulto-mulher.png')
          }else{
            //idoso
            img.setAttribute('src', 'foto-idoso-mulher.png')
          }
        }else if (fsex[1].checked) {
          gênero = 'Homem'
          if (idade >= 0 &&  idade < 10){
             //criança
             img.setAttribute('src', 'foto-crianca-homem.png')
          }
          else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-homem.png')
          }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-homem.png')
          }else {
            //idoso
            img.setAttribute('src', 'foto-idoso-homem.png')
          }
         
        }
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
  
  }
}