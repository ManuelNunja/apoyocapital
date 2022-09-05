
let config__controlExperiencia = [120,10,20,60,30];
let controlArray = document.querySelectorAll(".number__text h3");
controlArray.forEach(element => {
    element.innerHTML = String(parseInt(0));
});

function SetValueControl(index, getValue){
    getValue++;
    controlArray[index].innerHTML = String(getValue);
}

function CounterPLAY(){
    let index = -1;
    let interval__control0 = setInterval(() => {
        index = 0
        let getValue = parseInt(controlArray[index].innerHTML);
        let config__value = parseInt(config__controlExperiencia[index]);
        if(getValue == config__value){
            clearInterval(interval__control0)
        }else{
            SetValueControl(index, getValue);
        }
    }, 16);
    let interval__control1 = setInterval(() => {
        index = 1
        let getValue = parseInt(controlArray[index].innerHTML);
        let config__value = parseInt(config__controlExperiencia[index]);
        if(getValue == config__value){
            clearInterval(interval__control1)
        }else{
            SetValueControl(index, getValue);
        }
    }, 192);
    let interval__control2 = setInterval(() => {
        index = 2
        let getValue = parseInt(controlArray[index].innerHTML);
        let config__value = parseInt(config__controlExperiencia[index]);
        if(getValue == config__value){
            clearInterval(interval__control2)
        }else{
            SetValueControl(index, getValue);
        }
    }, 96);
    let interval__control3 = setInterval(() => {
        index = 3
        let getValue = parseInt(controlArray[index].innerHTML);
        let config__value = parseInt(config__controlExperiencia[index]);
        if(getValue == config__value){
            clearInterval(interval__control3)
        }else{
            SetValueControl(index, getValue);
        }
    }, 32);
    let interval__control4 = setInterval(() => {
        index = 4
        let getValue = parseInt(controlArray[index].innerHTML);
        let config__value = parseInt(config__controlExperiencia[index]);
        if(getValue == config__value){
            clearInterval(interval__control4)
        }else{
            SetValueControl(index, getValue);
        }
    }, 64);
}