function validateControlCalculator(){
    exito = true;
    let controlMonto = document.getElementById("inputMontoDocumento");
    let controlMoneda = document.getElementById("inputMoneda");
    let controlFecha = document.getElementById("inputFechaPago");
    let controlEmpresa = document.getElementById("inputEmpresa");
    let controlEmail = document.getElementById("inputEmail");
    if(controlMonto.value == "" || parseInt(controlMonto.value) == 0 ) {
        exito = false;
        AlertShow(1,"Debe ingresar un monto");
        controlMonto.focus();
        return exito;
    }
    if(controlMoneda.value == "" || parseInt(controlMoneda.value) == 0 ) {
        exito = false;
        AlertShow(1,"Debe seleccionar una moneda");
        controlMoneda.focus();
        return exito;
    }      
    if(controlFecha.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar una fecha de pago");
        controlFecha.focus();
        return exito;
    }   
    if(controlEmpresa.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar una razon social");
        controlEmpresa.focus();
        return exito;
    }   
    if(controlEmail.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un medio de contacto");
        controlEmail.focus();
        return exito;
    }
    return exito;
}
