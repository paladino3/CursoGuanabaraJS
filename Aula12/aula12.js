 var agora = new Date()
 var hora = agora.getHours()
 console.log(`Agora sao exatamente: ${hora} horas`)

 if (hora < 12){
    console.log(`Bom Dia!`)
}else if (hora <=18){
    console.log(`Boa Tarde!`)
}else if (horas > 1 && horas < 6)
   console.log(`Boa Madrugada!`) 
else{
    console.log(`Boa Noite!`)
}