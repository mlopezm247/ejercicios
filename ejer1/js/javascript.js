
var variable1=0;
    var variable2="texto";
    var variable3=true;
function mostrar() {

    alert(typeof variable1);
    alert(typeof variable2);
    alert(typeof variable3);


}

function cambiar() {

    variable1++;
    variable2++;
    variable3++;

    alert(typeof variable1);
    alert(typeof variable2);
    alert(typeof variable3);


}

function error() {

    const variable4=8;

    alert(typeof variable4);
   

    variable4++;
    alert(typeof variable4);

}