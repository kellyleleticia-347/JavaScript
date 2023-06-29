var agora = new Date()
var diaSem = agora.getDate()

diaSem = 0

switch (diaSem){
    case 0 :
        console.log('domingo')
        break
    case 1 :
        console.log('segunda')
        break
    case 2 :
        console.log('terça')
        break
    default :
        console.log('[ERRO] Dia da semanan inválido !')
}