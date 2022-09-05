
let arrayTypeAlert = ["--success","--danger","--warning"]

let div_alert = document.createElement("div");
div_alert.classList.add("siteAlert")
div_alert.classList.add("siteAlert--show")
let div_background = document.createElement("div");
div_background.classList.add("siteAlert__background")
let div_alert__message = document.createElement("div");
div_alert__message.classList.add("alert__message")
let div_text = document.createElement("div");
div_text.classList.add("text")
let p_text = document.createElement("p");


function AlertShow(alertType, alertMessage){
    let vType = arrayTypeAlert[alertType];
    div_alert__message.classList.add("alert__message" + vType);
    
    p_text.innerHTML = alertMessage;

    div_text.appendChild(p_text)
    div_alert__message.appendChild(div_text)
    div_background.appendChild(div_alert__message)
    div_alert.appendChild(div_background)

    let vContainer = document.querySelector(".siteContainer");
    vContainer.appendChild(div_alert);
    setTimeout(() => {
        div_alert.classList.add("control--dispose");
    }, 5000);
}

