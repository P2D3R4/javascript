
var nro1, nro2, opcao, result;
//entrada de dados 
nro1 = Number(document.getElementById("nro1").value);
nro2= Number(document.getElementById("nro2").value);
opcao= Number(document.getElementById("opcao").value);

switch (opcao){
    case 1: 
        result = (nro1 + nro2) /2;
        break;

     case 2:
        if (nro1 > nro2){
            result = (nro1 - nro2);
             }
             else{
                 result = (nro2 - nro1);
             }
             break;
        case 3: mennsagem =(nro1* nro2);
        break;

        case 4:if (nro2 !=0){
            result= nro1 / nro2;
        }
        else {
            result = "Divisão por zero ";
        }
        break;
        default: mesagem = "Opção inválida ";
}
{

    document.getElementById("resultado").innerHTML = result;
}   
