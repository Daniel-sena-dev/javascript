function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours() 
    msg.innerHTML = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12){
        img.src = 'manha.png'
        document.body.style.background = 'd8dfe3'
    }else if (horas >= 12 && horas < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ad763b'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#4f3775'
    }
}


