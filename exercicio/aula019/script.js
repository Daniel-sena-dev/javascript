var valores = []
var num = document.getElementById('num')
var lista = document.getElementById('flista')
var saida = document.getElementById('saida')
        
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){                   
    
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` 
        lista.appendChild(item)
        saida.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if ( valores[pos] > maior) 
                maior = valores[pos]
            if (valores [pos]  < menor)
                menor = valores[pos]
        }
        media = soma / total
        saida.innerHTML = ''
        saida.innerHTML += `<p>Ao todo, temos ${total} números cadastados.</p>`
        saida.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        saida.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        saida.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        saida.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}