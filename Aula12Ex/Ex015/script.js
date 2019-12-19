function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -  Number(fano.value)
        res.innerHTML = `idade calculada: ${idade} anos` 
        var genero = ''
        var img = document.createElement('img')//criando uma tag img via js
        img.setAttribute('id', 'foto')//setando um atribulto de id ="foto"

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'fotomenino.png')
            }else if (idade >= 10 && idade <21){
                //jovem
                img.setAttribute('src','fotojovemhomem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','fotohomem.png')
            }else{
                //idoso
                img.setAttribute('src','fotosenhor.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'fotomenina.png')
            }else if (idade >= 10 && idade <21){
                //jovem
                img.setAttribute('src','fotojovemulher.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','fotomulher.png')
            }else{
                //idoso
                img.setAttribute('src','fotosenhora.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}