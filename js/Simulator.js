document.getElementById("inputFinanciamiento").value = "100%";
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
            document.getElementById("inputFechaPago").value = "";
            document.getElementById("inputEmpresa").value = "";
            document.getElementById("inputEmail").value = "";

            resolve(exito);
        }, 3000)
    });

    let result = await promise;
    return result;
  }
        