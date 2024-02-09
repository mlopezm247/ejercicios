window.onload = function () {
  
  document.querySelector("div").onclick = function (e){
    console.log("has echoo click  en "+e.target.className);
    lista2.innerHTML+="<li>"+e.target.innerHTML+"</li>";
  console.log(palabra);
   

  }
  


};


