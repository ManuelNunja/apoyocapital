//desembolsoFormat = new Intl.NumberFormat('es-MX').format(desembolso.toFixed(2));

const input = document.getElementById('inputMontoDocumento');



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
  }

