"use strict"

//VARIABLES Y FUNCIONES GENERALES
const speed = ['1/500s','1/250s','1/125s','1/60s','1/30s','1/15s','1/8s','1/4s','.5s','1s','2s','4s','8s','15s','30s','1m','2m','4m','8m','15m','30m','1h','2h','4h','8h','15h']

const diaphragm = ['1.4','2','2.8','4','5.6','8','11','16','22','32','45','64','90','128','180','256','360','512','720','1024']

let values = []

const selection = (container,value)=>{
    container.classList.add("selected-item")
    container.innerText = `${value}`
}

const valueSelector = (e,array,container)=>{
    let value = e.target.innerText
    
    if (array.indexOf(value) == -1){
        console.log ("error")
    }else {
        values.push(array.indexOf(value))
        selection(container,value)
    }
}


//SELECCIÓN DE DIAFRAGMA FOTÓMETRO
const container1 = document.getElementById("container1")


container1.addEventListener("click",(e)=>{
    if (values.length != 0) location.reload()
    
    valueSelector(e,diaphragm,container1)
})


//SELECCIÓN DE VELOCIDAD FOTÓMETRO
const container2 = document.getElementById("container2")

container2.addEventListener("click",(e)=>{
    if (values.length != 1) location.reload()
    
    valueSelector(e,speed,container2)
})


//SELECCIÓN DE DIAFRAGMA DE CÁMARA
const container3 = document.getElementById("container3")

container3.addEventListener("click",(e)=> {
    if (values.length != 2) location.reload()
    
    valueSelector(e,diaphragm,container3)
})


//CONFIRMACIÓN Y RESULTADO
const confirmationBtn = document.getElementById("confirmationBtn")
const resultMsg = document.getElementById("resultMsg")
const resultText = document.getElementById("resultText")
const resultBtn = document.getElementById("resultBtn")

const transition=()=>{
    resultMsg.classList.add("show-result")
    
    resultBtn.addEventListener("click",()=>{
        resultMsg.classList.remove("show-result")       
        location.reload()
    })
}

confirmationBtn.addEventListener ("click",()=>{
    let select1 = values[2] - values[0]
    let select2 = values[1] + select1
    let select3= speed[select2]
    
    if (select3 == undefined){
        resultText.innerHTML = "La exposición correspondiente no existe en nuestro contador"
        transition()
    }else {
        resultText.innerHTML = `Para N° F ${diaphragm[values[2]]} la exposición es: ${select3}`
        transition()
    }
})

