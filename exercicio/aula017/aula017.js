var num = [1, 0, 9, 5, 4]
  
console.log(num.length) //MOSTRA O TAMANHO DO VETOR
console.log(`${num}`) //IMPRIME SOMENTE OS NUMEROS DO VETOR
console.log(num) //IMPRIME O VETOR COMPLETO

num.push(8) //ADICIONA UM ELEMENTO NOVO AO FINAL DO VETOR

/*for (i = 0; i < num.length ; i++){
    console.log(`O elemento ${i} tem o valor ${num[i]}`) //MOSTRANDO O VETOR COM FOR    
}*/

console.log(num.sort()) //ORGANIZA O VETOR
console.log(num) //PERMANECE EM ORDEM


for (let pos in num){
    console.log(num[pos])
}

console.log(num.indexOf(4))