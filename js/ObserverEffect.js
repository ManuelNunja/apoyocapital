// OBSERVER CONTROL SQUARE - HOME / PRODUCTO ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let count1 = document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row.top .row__square.image");
            for(i = 0;i<= count1.length - 1;i++){
                count1[i].classList.add("image--effect");
            }
            let count2 = document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row.bottom .row__square.image");
            for(i = 0;i<= count2.length - 1;i++){
                count2[i].classList.add("image--effect");
            }
            let count3 = document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .title");
            for(i = 0;i<= count3.length - 1;i++){
                count3[i].classList.add("title--effect");
            }
            let count4 = document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .text")
            for(i = 0;i<= count4.length - 1;i++){
                count4[i].classList.add("text--effect");
            }
            let count5 = document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .list ul li")
            for(i = 0;i<= count5.length - 1;i++){
                count5[i].classList.add("li--effect");
            }

            document.querySelectorAll(".homeControlSquare .homeControlSquare__bacckground .homeControlSquare_row .row__square.info .button .linkButton")[0].classList.add("linkButton--effect")
        }
    })
})
if(document.querySelector(".intersectionObserver__homeControlSquare") != null){
    observer.observe(document.querySelector(".intersectionObserver__homeControlSquare"));
}
// OBSERVER CONTROL FINANCIAMOS ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observerProducto = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let count1 = document.querySelectorAll(".productoControlFinanciamos .productoControlFinanciamos__background .side");
            for(i = 0;i<= count1.length - 1;i++){
                count1[i].classList.add("side--effect");
            }
        }
    })
})
if(document.querySelector(".intersectionObserver__productoControlFinanciamos") != null){
    observerProducto.observe(document.querySelector(".intersectionObserver__productoControlFinanciamos"));
}
// OBSERVER CONTROL EXPERIENCIA ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observerExperiencia = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            CounterPLAY();
        }
    })
})
if(document.querySelector(".intersectionObserverExperiencia") != null){
    observerExperiencia.observe(document.querySelector(".intersectionObserverExperiencia"));
}
// OBSERVER CONTROL ICA GROUP ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observerICAGroup = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let control1 = document.querySelectorAll(".homeControlIcaGroup .homeControlIcaGroup__background .homeControlIcaGroup__columns .col1 .itemControl");
            for(i = 0;i<= control1.length - 1;i++){
                control1[i].classList.add("itemControl--effect--col1");
            }
            let control2 = document.querySelectorAll(".homeControlIcaGroup .homeControlIcaGroup__background .homeControlIcaGroup__columns .col2 .itemControl");
            for(i = 0;i<= control2.length - 1;i++){
                control2[i].classList.add("itemControl--effect--col2");
            }
            let control3 = document.querySelectorAll(".homeControlIcaGroup .homeControlIcaGroup__background .homeControlIcaGroup__columns .col3 .itemControl");
            for(i = 0;i<= control3.length - 1;i++){
                control3[i].classList.add("itemControl--effect--col3");
            }
        }
    })
})
if(document.querySelector(".intersectionObserverICaGroup") != null){
    observerICAGroup.observe(document.querySelector(".intersectionObserverICaGroup"));
}
// OBSERVER CONTROL VALORES ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observerValores = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let control1 = document.querySelectorAll(".nosotrosControlValores .nosotrosControlValores__background .items .item .image .imgControl");
            for(i = 0;i<= control1.length - 1;i++){
                control1[i].classList.add("imgControl--effect" + (i + 1));
            }
        }
    })
})
if(document.querySelector(".intersectionObserverValores") != null){
    observerValores.observe(document.querySelector(".intersectionObserverValores"));
}
// OBSERVER CONTROL EQUIPO ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observerEquipo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let control1 = document.querySelectorAll(".nosotrosControlEquipo .nosotrosControlEquipo__background .principal .principal__background");
            for(i = 0;i<= control1.length - 1;i++){
                control1[i].classList.add("principal__background--effect");
            }
        }
    })
})
if(document.querySelector(".intersectionObserverEquipo") != null){
    observerEquipo.observe(document.querySelector(".intersectionObserverEquipo"));
}
// OBSERVER CONTROL ALIADOS ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
const observerAliados = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let control1 = document.querySelectorAll(".nosotrosConrolAliados .nosotrosConrolAliados__background .nosotrosConrolAliados__columns .column");
            for(i = 0;i<= control1.length - 1;i++){
                control1[i].classList.add("column--effect" + (i + 1));
            }
        }
    })
})
if(document.querySelector(".intersectionObserverAliados") != null){
    observerAliados.observe(document.querySelector(".intersectionObserverAliados"));
}