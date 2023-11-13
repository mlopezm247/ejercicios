
window.onload= function () {

window.onhashchange= function(){
  hash=window.location.hash;
  console.log("hashchange " + hash);
  /* resultado.innerHTML +=  */
  if (hash=="#1") {
    resultado.innerHTML="eres un pringao 1";
  }else if (hash=="#2") {
  resultado.innerHTML="eres un pringao 2";
  }else if (hash=="#3") {
   resultado.innerHTML="eres un pringao 3";
  }else{
    console.log("esto da errrorr");
  }

}

};


