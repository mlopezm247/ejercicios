/*
function prueba() {
    num=document.forms[0].nota.value
if (num==0) {
    alert("eres inutil");
}else if (num>0 && num<5) {
    alert("suspenso tonto");
}else if (num==5 ) {
    alert("suficiente");
}else if (num>5 && num<=6) {
    alert("bien");
}else if (num>6 && num<=8) {
 alert("notable");
}else if (num>8 && num<=9) {
 alert("sobre");
}else if (num>9 && num<=10) {
alert("un puto 10 chaval");
}else {
alert("no ere ma tonto porque no puedes");
}

}*/


//CONDICIONAL TERNARIO
/*
function prueba() {
  num = document.forms[0].nota.value;

  num == 0
    ? alert("eres inutil")
    : num > 0 && num < 5
    ? alert("suspenso tonto")
    : num == 5
    ? alert("suficiente")
    : num > 5 && num <= 6
    ? alert("bien")
    : num > 6 && num <= 8
    ? alert("notable")
    : num > 8 && num <= 9
    ? alert("sobre")
    : num > 9 && num <= 10
    ? alert("un puto 10 chaval")
    : alert("no ere ma tonto porque no puedes");
}
*/
//CONDICIONAL swich

/* function prueba() { */
    num = prompt("dime un numero entre 0 y 100");

  
/*    switch (num%2==0) {
    case 1:
        alert ("es par");
        break;
    case 2:
           alert ("es impar");
           break;
    default:
        alert ("no es par o impar");
        break;
   } */

   let a=0;
   do {
    a++;
    if (a%2==0)continue; 
    console.log(a);




   

   } while (a<num);


/*   }
   */