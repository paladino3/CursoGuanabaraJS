function Taboada(){
var n = window.document.getElementById('txtnum')
var res = window.document.getElementById('res')
var numero = Number (n.value) 
if (n.value.length == 0){
    alert(`Não pode ser Vazio`)
}else{
    res.innerHTML = ''
for(var i = 1 ;i <= 10 ; i++ ){
    
    var item = document.createElement('option') // cria um seletor de itens 

    item.text = `${numero} * ${i} = ${i*numero}` //texto do item
    res.appendChild(item)// adiciona o item no seletor
} 
}
}


/*
var c = 9

for (var i=0 ; i <=10;i++ ){
    
    console.log(`${c} * ${i} = ${i*c}`)
}
*/