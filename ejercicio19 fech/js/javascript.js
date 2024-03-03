window.onload=()=>{
  texto1.oncopy=function (e) {
    e.preventDefault();
    let texto=window.getSelection();
    e.clipboardData.setData("text/plain",texto+"(copyright VPN)");
  }


  caja.onpaste=function (e) {
 /*  e.preventDefault(); */
 /*  let texto=e.clipboardData.getData("text/plain"); */
  }
}


