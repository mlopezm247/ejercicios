
/*
function funciondelsubnormal(num1,num2) {
    let resultado=num1 + num2;
    return resultado;
}
alert(funciondelsubnormal("hola "," que tal"));
  */  

/*
(function (num1,num2) {
    let resultado=num1 + num2;
    alert(resultado)
}) ("hola "," que tal");
  */



//FUNCION ANONIMA
/*
window.onload=function  callatepesao()  {
    let memojo=confirm("¿LLueve?")==true && confirm("sales a la calle")==true && confirm("¿LLevas gorro?")==false && confirm("llevas paraguas")==false ;

    if (memojo== true) {
        alert("TE MOJAS PRINGAO")
    }else{

        alert("no te mojas")
    }

    

  
};*/

//FUNCION FLECHA

window.onload=()=> {
    let memojo=confirm("¿LLueve?")==true && confirm("sales a la calle")==true && confirm("¿LLevas gorro?")==false && confirm("llevas paraguas")==false ;

    if (memojo== true) {
        alert("TE MOJAS PRINGAO")
    }else{

        alert("no te mojas")
    }
    console.log(memojo ? "memojo" : "no memojo");
  
};
