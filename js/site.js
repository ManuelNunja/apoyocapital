function removeOnClick(selector) {
    let control = document.getElementsByClassName(selector)
    for(i = 0; i <= control.length - 1; i++){
        control[i].onclick = function() {
            return false
        }
    }
}
function createFile(content, fileName, contentType){
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
function createKeyClass(){
    let data1 = new Date();
    let code = "classevent" + data1.getTime();
    //localStorage.setItem("classevent",code)

    let control = document.getElementsByClassName("classEventOnClick")
    for(i = 0; i <= control.length - 1; i++){
        control[i].classList.add(code)
    }
    removeOnClick(code);
    console.log(code);
}
function responsiveControl(){
    let vWidth = window.innerWidth;
    if (vWidth > 768) {
        var element = document.getElementsByClassName("siteMenu__background__sideRight");
        if(element != null){
            if(element.length > 0){
                for(i = 0;i <= element.length - 1; i++){
                    element[i].classList.add("siteMenu__background__sideRight--fixed");
                    element[i].style.marginTop = "0";
                    document.getElementsByClassName("siteMenu__background__sideLeft")[0].classList.remove("siteMenu__background__sideLeft--active")
                    document.getElementsByClassName("imageBrand")[0].classList.remove("imageBrand--active")
                    document.getElementsByClassName("menuIcon")[0].classList.remove("menuIcon--active")
                    document.getElementsByClassName("menuIcon")[1].classList.remove("menuIcon--active")
                }
            }
        }
    }else{
        var element = document.getElementsByClassName("siteMenu__background__sideRight");
        if(element != null){
            if(element.length > 0){
                element[0].classList.remove("siteMenu__background__sideRight--fixed")
                setTimeout(function(){
                    let valor = element[0].clientHeight;
                    element[0].style.marginTop = "-" + valor + "px";
                }, 750)
                document.getElementsByClassName("siteMenu__background__sideLeft")[0].classList.remove("siteMenu__background__sideLeft--active")
                document.getElementsByClassName("imageBrand")[0].classList.remove("imageBrand--active")
                document.getElementsByClassName("menuIcon")[0].classList.remove("menuIcon--active")
                document.getElementsByClassName("menuIcon")[1].classList.remove("menuIcon--active")
            }
        }
    }
    let arraychild = document.getElementsByClassName("nav__itemMenu__nivel child");
    for(i = 0;i <= arraychild.length - 1;i++){
        arraychild[i].style.display = "none";
    };
}
createKeyClass();
//responsiveControl();
//let jsonData = "[{'Nombre':'Manuel'}]"
//createFile(jsonData, 'json.txt', 'text/plain');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            //let xLen = document.querySelector(".homeControlPF__effect").length;
            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row.top .row__square.image")[0].classList.add("image--effect")
            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row.bottom .row__square.image")[0].classList.add("image--effect")

            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .title")[0].classList.add("title--effect")
            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .title")[1].classList.add("title--effect")

            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .text")[0].classList.add("text--effect")
            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .text")[1].classList.add("text--effect")

            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .button .linkButton")[0].classList.add("linkButton--effect")
        }
    })
})

observer.observe(document.querySelector(".intersectionObserver"))