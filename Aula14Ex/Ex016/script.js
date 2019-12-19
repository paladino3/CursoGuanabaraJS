function Calcular(){
   var i =  window.document.getElementById('inicio')
   var f = window.document.getElementById('fim')
   var p = window.document.getElementById('passo')
  let res =  document.getElementById('res')

   if (i.value.length == 0) {
      res.innerHTML = `Início não pode ser vazio!`
  }else if(f.value.length == 0) {
      res.innerHTML = `Fim não pode ser vazio!`
  }else if (p.value.length == 0){
      alert(`Passo não pode ser vazio, considerando Passo = 1! `)
      res.innerHTML = `Contando: `
      var inicio = Number(i.value)
      var fim = Number(f.value)
      var passo = 1 // default passo =1
   
  if (inicio < fim){
      for(inicio ; inicio <= fim ; inicio +=passo){
            res.innerHTML +=` ${inicio}  \u{1F449} `
      
      }
      
      }else if(inicio > fim) {
            for(inicio ; inicio >= fim ; inicio -=passo){
                  res.innerHTML +=` ${inicio}  \u{1F449} `
      }
}
      res.innerHTML += `\u{1F3C1}`
  
  
  }else if (i.value.length != 0 && f.value.length != 0 && p.value.length != 0 ){

        res.innerHTML = `Contando: `
        var inicio = Number(i.value) // converterndo para numero o inicio
        var fim = Number(f.value) 
        var passo = Number(p.value) // passo a minha escolha
      if(inicio < fim){
            for(inicio ; inicio <= fim ; inicio +=passo){
                  res.innerHTML +=` ${inicio}  \u{1F449}	`
            }
          
      }else if(inicio > fim)  {
            for(inicio ; inicio >= fim ; inicio -=passo){
                  res.innerHTML +=` ${inicio}  \u{1F449}	`
            }
            
  }  
  res.innerHTML += `\u{1F3C1}` 
  }else{
        res.innerHTML = `numero invalido!!!`
  }
}
   
  

/*
resolvido

var inicio = 1
var fim =20
var passo = 2

for (inicio ; inicio <= fim ; inicio += passo ){
    console.log(`resultado... ${inicio}`)
}*/
