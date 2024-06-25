function carregar (){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora = 10

msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        img.src = 'fotomanha.png'
 document.body.style.background = '#deb887'
        }else if (hora >= 12 && hora <= 17 ){
            img.src = 'fototarde.png'
            document.body.style.background='blue'
        } else{
            img.src = 'fotonoite.png'
            document.body.style.background = '#4834cb'
        }
    }