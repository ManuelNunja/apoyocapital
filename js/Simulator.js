/*document.getElementById("inputFinanciamiento").value = "100%";
document.getElementById("inputTasa").value = "2%";

var inputMoneda = document.getElementById("inputMoneda");
let inputEmpresa = document.getElementById("inputEmpresa").value;
var inputContacto = document.getElementById("inputContacto"); 
var inputEmail = document.getElementById("inputEmail");

var vMoneda = inputMoneda;
var vFinanciamiento = inputFinanciamiento;
var vTasa = 0.02; // TASA FIJA DESDE BD

let days = -1;
let currentDate = -1;
let objDate = 'error';

const getDays = (vFechaPago) => {
    currentDate = new Date().getTime();
    objDate = FormatDate(vFechaPago);
    days = (objDate.getDiference + 1);
    console.log(days)
}

let desembolso = -1;
let descuento = -1;

const calculate = (vMontoDocumento) => {
    let i = 1 + vTasa;//(parseFloat(vTasa) + 100) + '%';
    console.log(i)
    let t = (days / 30);
    console.log(t)
    descuento = (Math.pow(i,t) * vMontoDocumento - vMontoDocumento);
    console.log(descuento.toFixed(2))
    desembolso = (vMontoDocumento - descuento);
    console.log(desembolso.toFixed(2));
}

let desembolsoFormat = 0;

const formatValue = () => {
    desembolsoFormat = new Intl.NumberFormat('es-MX').format(desembolso.toFixed(2));
}

const formatSymbol = () => {
    desembolsoFormat = "PEN " + desembolsoFormat;
    console.log(desembolsoFormat)
}

function CalculateFinancing(){
    let exito = false;
    setTimeout(() => {
        getDays();
        calculate();
        formatValue();
        formatSymbol();
        exito = true;
        let modal = document.getElementById("modalSite");
        modal.classList.remove("modalSite__animation_show");
        return exito;
    }, 3000);
}

function OrderDate(value){
    let date = new Date(value);
    let utcDay = String(date.getUTCDate()).padStart(2, '0');
    let utcMnt = String(date.getUTCMonth() + 1).padStart(2, '0');
    let utcYear = date.getUTCFullYear();
    let newDate = utcDay + '/' + utcMnt + '/' + utcYear;
    return newDate;
}

async function CalculateFinancing1() {
    var vFechaPago = OrderDate(document.getElementById("inputFechaPago").value);
    var inputMontoDocumento = document.getElementById("inputMontoDocumento").value;

    let exito = false;
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
            getDays(vFechaPago);
            calculate(inputMontoDocumento);
            formatValue();
            formatSymbol();
            exito = true;
            let modal = document.getElementById("modalSite");            
            
            let monto = new Intl.NumberFormat('es-MX').format(inputMontoDocumento);
            let empresa = document.getElementById("inputEmpresa").value;
            let contacto = document.getElementById("inputEmail").value;
            document.getElementById('labelMonto').innerHTML = parseInt(inputMontoDocumento).toFixed(2);
            document.getElementById('labelFechaPago').innerHTML = vFechaPago;
            document.getElementById('labelTasa').innerHTML = "2%";
            document.getElementById('labelEmpresa').innerHTML = empresa;
            document.getElementById('labelContacto').innerHTML = contacto;
            document.getElementById('labelAdelanto').innerHTML = desembolsoFormat;
            document.getElementById('labelInteres').innerHTML = "PEN " + parseFloat(descuento).toFixed(2);

            document.getElementById("inputMontoDocumento").value = "";
            document.getElementById("inputMoneda").value = "";
            document.getElementById("inputFechaPago").value = "";
            document.getElementById("inputEmpresa").value = "";
            document.getElementById("inputEmail").value = "";

            resolve(exito);
        }, 3000)
    });

    let result = await promise;
    return result;
}*/

class ResponseFactoring{
    constructor(monto, interes, desembolso){
        this.monto = monto
        this.interes = interes
        this.desembolso = desembolso
    }
}

function FormatValue(pValue){
    let valueFormat = new Intl.NumberFormat('es-MX').format(pValue.toFixed(2));
    return valueFormat;
}

async function CalculateFactoring(){
    let exito = false;
    let inputMontoFactura = document.getElementById("inputMontoFactura").value;
    let inputDias = document.getElementById("inputDias").value;

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let tasa = (0.02 + 1);
            let montoFactura = parseFloat(inputMontoFactura);
            let dias = parseInt(inputDias);
            let t = (dias / 30);

            let interes = ((Math.pow(tasa, t) * montoFactura) - montoFactura);
            let desembolso = (montoFactura - interes)

            document.getElementById("inputMontoResponse").value = FormatValue(montoFactura);
            document.getElementById("inputInteresResponse").value = FormatValue(interes);
            document.getElementById("inputAdelantoResponse").value = FormatValue(desembolso);
            exito = true;

            resolve(exito);
        }, 3000);
    });
    let result = await promise;
    //console.log(result);
    return result;
}

function ClearControlFactoring(){
    document.getElementById("inputRucEmpresa").value = "";
    document.getElementById("inputMontoFactura").value = "";
    document.getElementById("inputDias").value = "";
    document.getElementById("inputRucCliente").value = "";
    document.getElementById("inputCorreo").value = "";
    document.getElementById("inputTelefono").value = "";
    document.getElementById("chkTerminos").checked = false;
    let control = document.querySelectorAll(".inputButtonDias");
    for(i = 0;i<= control.length - 1;i++){
        control[i].classList.remove("inputButtonDias--selected")
    }
}

async function CalculateCapitalTrabajo(){
    let exito = false;
    let inputNombre = document.getElementById("inputNombre").value;
    let inputApellido = document.getElementById("inputApellido").value;
    let inputCorreo = document.getElementById("inputCorreo").value;
    let inputTelefono = document.getElementById("inputTelefono").value;
    let inputRucEmpresa = document.getElementById("inputRucEmpresa").value;

    let inputMontoFinanciamiento = document.getElementById("inputMontoFinanciamiento").value;
    let inputPlazo = document.getElementById("inputPlazo").value;
    let inputPlazoGracia = document.getElementById("inputPlazoGracia").value;
    let inputMontoGarantia = document.getElementById("inputMontoGarantia").value;
    let inputFechaDesembolso = document.getElementById("inputFechaDesembolso").value;

    let inputMontoFinanciamientoMoneda = document.getElementById("inputMontoFinanciamientoMoneda").value;
    let inputMontoGarantiaMoneda = document.getElementById("inputMontoGarantiaMoneda").value;    

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let TEA = (0.24 + 1);
            let montoFinanciamiento = parseFloat(inputMontoFinanciamiento);
            let montoGarantia = parseFloat(inputMontoGarantia);
            let plazo = parseInt(inputPlazo);
            let plazoGracia = parseInt(inputPlazoGracia);

            // PROCESS ...
            console.log("-- Save data --");
            console.log(inputNombre + " " + inputApellido);
            console.log("email: " + inputCorreo);
            console.log("Phone: " + inputTelefono);
            console.log("RUC: " + inputRucEmpresa);

            console.log("Financiamiento: " + FormatValue(montoFinanciamiento) + " " + (inputMontoFinanciamientoMoneda == 'soles' ? "PEN" : "USD"));
            console.log("Plazo: " + inputPlazo);
            console.log("Valor de garantía: " + FormatValue(montoGarantia) + " " + (inputMontoGarantiaMoneda == 'soles' ? "PEN" : "USD"));
            console.log("Plazo de Gracia: " + inputPlazoGracia);
            console.log("TEA: 26%");
            console.log("Fecha de desembolso: " + inputFechaDesembolso);
            

            exito = true;

            resolve(exito);
        }, 3000);
    });
    let result = await promise;
    //console.log(result);
    return result;
}