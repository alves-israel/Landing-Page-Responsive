function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   var hora = 8 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.scr = 'fotoManha2.jpg'
    } else if ( hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'fotoTarde2.png'
    } else {
        //Boa noite
        img.src = 'img_noite.png'
    }
}