
var num = [0 ,9 ,7 ,4 ,2 ,3]
num.sort()
console.log(num)

//for (var pos = 0 ; pos < num.length ; pos++)
    //console.log( `A posição ${pos} tem o valor ${num[pos]}`)  
    
 for(let pos in num ){
    console.log(`a posição ${pos} tem o valor ${num[pos]} `)
 }
