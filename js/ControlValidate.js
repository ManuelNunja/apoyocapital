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
function ValidateSimularFactoring(){
    let exito = true;
    let inputRUCEmpresa = document.getElementById("inputRucEmpresa")
    let inputMontofactura = document.getElementById("inputMontoFactura")
    let inputDias = document.getElementById("inputDias")
    let inputRUCCliente = document.getElementById("inputRucCliente")
    let inputCorreo = document.getElementById("inputCorreo")
    let inputTelefono = document.getElementById("inputTelefono")

    if(inputRUCEmpresa.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un RUC de empresa");
        inputRUCEmpresa.focus();
        return exito;
    } 
    if(inputMontofactura.value == "" || parseInt(inputMontofactura.value) <= 0 ) {
        exito = false;
        AlertShow(1,"Debe ingresar un monto de factura");
        inputMontofactura.focus();
        return exito;
    }
    if(inputDias.value == "" || parseInt(inputDias.value) <= 0 ) {
        exito = false;
        AlertShow(1,"Debe ingresar una cantidad de días");
        inputDias.focus();
        return exito;
    }
    if(inputRUCCliente.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar el RUC del cliente");
        inputRUCCliente.focus();
        return exito;
    } 
    if(inputCorreo.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un correo electronico");
        inputCorreo.focus();
        return exito;
    } 
    if(inputTelefono.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un telefono de contacto");
        inputTelefono.focus();
        return exito;
    } 
    return exito;
}
function ValidateSimularCapitalTrabajo(){
    let exito = true;
    let inputNombre = document.getElementById("inputNombre")
    let inputApellido = document.getElementById("inputApellido")
    let inputCorreo = document.getElementById("inputCorreo")
    let inputTelefono = document.getElementById("inputTelefono")
    let inputRUCEmpresa = document.getElementById("inputRucEmpresa")
    let inputMontoFinanciamiento = document.getElementById("inputMontoFinanciamiento")
    let inputMontoFinanciamientoMoneda = document.getElementById("inputMontoFinanciamientoMoneda")
    let inputPlazo = document.getElementById("inputPlazo")
    let inputMontoGarantia = document.getElementById("inputMontoGarantia")
    let inputMontoGarantiaMoneda = document.getElementById("inputMontoGarantiaMoneda")
    let inputFechaDesembolso = document.getElementById("inputFechaDesembolso")

    if(inputNombre.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un nombre");
        inputNombre.focus();
        return exito;
    } 
    if(inputApellido.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un apellido");
        inputApellido.focus();
        return exito;
    } 
    if(inputCorreo.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un correo electronico");
        inputCorreo.focus();
        return exito;
    } 
    if(inputTelefono.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un telefono de contacto");
        inputTelefono.focus();
        return exito;
    } 
    if(inputRUCEmpresa.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar un RUC de empresa");
        inputRUCEmpresa.focus();
        return exito;
    } 

    if(inputMontoFinanciamiento.value == "" || parseInt(inputMontoFinanciamiento.value) <= 0 ) {
        exito = false;
        AlertShow(1,"Debe ingresar un monto a financiar");
        inputMontoFinanciamiento.focus();
        return exito;
    }
    if(inputPlazo.value == "" || parseInt(inputPlazo.value) == 0 ) {
        exito = false;
        AlertShow(1,"Debe ingresar un plazo");
        inputPlazo.focus();
        return exito;
    }
    if(inputMontoGarantia.value == "" || parseInt(inputMontoGarantia.value) <= 0 ) {
        exito = false;
        AlertShow(1,"Debe ingresar un monto de garantía");
        inputMontoGarantia.focus();
        return exito;
    }

    if(inputFechaDesembolso.value == "") {
        exito = false;
        AlertShow(1,"Debe ingresar una fecha de desembolso");
        inputFechaDesembolso.focus();
        return exito;
    } 
    return exito;
}
