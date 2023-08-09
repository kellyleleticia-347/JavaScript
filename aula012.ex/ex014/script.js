function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas <br>`
    if (hora >= 0 && hora < 12){
        //Bom dia  !  
        msg.innerHTML += 'Bom dia !'
        document.body.style.background = '#d9ab73'
        img.src = 'imagens/fotomanha.png'
    }else if( hora >= 12 && hora < 18) {
        //Boa tarde !
        msg.innerHTML += 'Boa tarde !'
        document.body.style.background = '#f29544'
        img.src = 'imagens/fototarde.png'
    }else {
        //Boa noite !
        msg.innerHTML += 'Boa noite !'
        document.body.style.background = '#52498c'
        img.src = 'imagens/fotonoite.png'}
    
    }
    
