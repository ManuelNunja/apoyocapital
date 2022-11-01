function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
        textbox.addEventListener(event, function(e) {
            if (inputFilter(this.value)) {
                // Accepted value
                if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    });
}

let arrayElementsAplpha = document.querySelectorAll(".inputRxtAplha");
let arrayElementsAlphaNumber = document.querySelectorAll(".inputRxtAlphaNumber");
let arrayElementsAlphaNumberEmail = document.querySelectorAll(".inputRxtAlphaNumberEmail");

let arrayElementsNumber = document.querySelectorAll(".inputRxtNumber");
let arrayElementsNumberFloat = document.querySelectorAll(".inputRxtNumberFloat");
let arrayElementsNumberRange = document.querySelectorAll(".inputRxtNumberRange");
/* ALPHA NUMBER ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----*/
arrayElementsAplpha.forEach(element => {
    setInputFilter(element, function(value) {
        return /^[a-z]*$/i.test(value); }, "");
});
arrayElementsAlphaNumber.forEach(element => {
    setInputFilter(element, function(value) {
        return /^[0-9a-z]*$/i.test(value) && (value != "."); }, "");
});
arrayElementsAlphaNumberEmail.forEach(element => {
    setInputFilter(element, function(value) {
        return /^[0-9a-z@.]*$/i.test(value); }, "");
});
/* NUMBER ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----*/
arrayElementsNumber.forEach(element => {
    setInputFilter(element, function(value) {
        return /^\d*$/.test(value); }, "");
});
arrayElementsNumberFloat.forEach(element => {
    setInputFilter(element, function(value) {
        return /^-?\d*[.]?\d*$/.test(value); }, "");
});
arrayElementsNumberRange.forEach(element => {
    setInputFilter(element, function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 84); }, "");
});

