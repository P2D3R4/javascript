function funcao(){
      //criar o vetor 
      var vet = []
      //criar o objeto 
    var objeto = {}
    //criar os produtos 
    for(var i=0; i<5;i++){
    objeto.codigo = Number(prompt("informe o codigo"))
    objeto.nome = (prompt("informe o nome"))
    objeto.qtde = Number(prompt("informe o qtde"))
    objeto.preco = Number(prompt("informe o preco"))
    }
    //criar o vetor 
    var vet = []
    vet.push(objeto)
    alert("Produto criado com sucesso")
   }
   var estoque = 0;
   for(var i=0;i<5;i++){
       estoque = estoque + vet[i].qtde
   }
   alert("Qtde em estoque" + estoque)
}