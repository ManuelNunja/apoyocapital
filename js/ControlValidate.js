//desembolsoFormat = new Intl.NumberFormat('es-MX').format(desembolso.toFixed(2));

/*const input = document.getElementById('inputMontoDocumento');



input.addEventListener('focusout', (event) => {
    let xValue = input.value;
    //valueFormat = new Intl.NumberFormat('es-MX').format(xValue);
    input.value = xValue;
});

input.addEventListener('keypress', logKey);
function logKey(e) {
    let value = `${e.which}`;
    if(value >= 48 && value <= 57){
        return true;
    }else{
        return false;
    }
    //alert(`${e.which}`);
  }*/



function validateControlCalculator(){
    exito = true;
    let controlMonto = document.getElementById("inputMontoDocumento").value = "";
    let controlFecha = document.getElementById("inputFechaPago").value = "";
    let controlEmpresa = document.getElementById("inputEmpresa").value = "";
    let controlEmail = document.getElementById("inputEmail").value = "";
    if(controlMonto == "" || parseInt(controlMonto) == 0 ) {
        exito = false;
        alert("Debe ingresar un monto");
    }   
    if(controlFecha == "") {
        exito = false;
        alert("Debe ingresar una fecha valida")
    }   
    if(controlEmpresa == "") {
        exito = false;
        alert("Debe ingresar una razon social")
    }   
    if(controlEmail == "") {
        exito = false;
        alert("Debe ingresar un medio de contacto")
    }   
}

