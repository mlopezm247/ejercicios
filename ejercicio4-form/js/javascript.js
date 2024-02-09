window.onload = function() {

document.forms[0].onsubmit = function(event) {
event.preventDefault();
for (let i = 0; i < document.forms[0].elements.length-1; i++) {
 

  switch (document.forms[0].elements[i].type) {
    case "text":
      miElemento.innerHTML += "<p>nombre:"+document.forms[0].elements[i].value+"</p>";
      break;
      case "email":
        miElemento.innerHTML +="<p>email:"+document.forms[0].elements[i].value+"</p>";
        break;

        case "tel":
          miElemento.innerHTML +="<p>telefono:"+document.forms[0].elements[i].value+"</p>";
        break;

        case "select-one":
          miElemento.innerHTML +="<p>selecion:"+document.forms[0].elements[i].options[document.forms[0].elements[i].selectedIndex].value+"</p>";
        break;
    default:
      break;
  }
  
}

}


}
