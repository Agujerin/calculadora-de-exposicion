/*CREACIÓN DEL SELECT

const select = document.getElementById("select")

const fragmento = document.createDocumentFragment()

let options = ['Otros','1/4s.','1/8s.','1/15s.','1/30s.','1/60','1/60s.','8m.','15m.','15m.','1h.','2h.','4h.','8h','15h.']

for (option of options){
    let item = document.createElement("OPTION")
    item.innerHTML = option
    fragmento.appendChild(item)
}

select.appendChild(fragmento)
*/

//GENERALES

let velocidades = ['1/500s','1/250s','1/125s','1/60s','1/30s','1/15s','1/8s','1/4s','.5s','1s','2s','4s','8s','15s','30s','1m','2m','4m','8m','15m','30m','1h','2h','4h','8h','15h']
let diafragmas = ['1.4','2','2.8','4','5.6','8','11','16','22','32','45','64','90','128','180','256','360','512','720','1024']

const item = (a,b)=>{
    a.classList.add ("item")
    a.innerText = `${b}`
}


//SELECCIÓN DE DIAFRAGMA FOTÓMETRO

const cont1 = document.getElementById ("contenedor1")

let valores = []

cont1.addEventListener ("click",(e)=>{
    if (valores.length != 0) location.reload()
    let valor = e.target.innerText
        if (diafragmas.indexOf(valor)== -1){
            console.log ("error")
        } else {
            valores.push(diafragmas.indexOf(valor))
            item (cont1,valor)
            }
})

//SELECCIÓN DE VELOCIDAD FOTÓMETRO

const cont2 = document.getElementById ("contenedor2")

cont2.addEventListener ("click",(e)=>{
    if (valores.length != 1) location.reload()
    let valor = e.target.innerText
        if (velocidades.indexOf(valor)== -1){
            console.log ("error")
        } else {
            valores.push(velocidades.indexOf(valor))
            item (cont2,valor)
            }
})

//SELECCIÓN DE DIAFRAGMA DE CÁMARA

const cont3 = document.getElementById ("contenedor3")

cont3.addEventListener ("click",(e)=>{
    let valor = e.target.innerText
        if (diafragmas.indexOf(valor)== -1){
            console.log ("error")
        } else valores.push(diafragmas.indexOf(valor))
})

//CONFIRMACIÓN Y RESULTADO

const button = document.getElementById ("button")
const result = document.getElementById ("result")
const p = document.getElementById ("text")
const btn = document.getElementById ("btn")
const all = document.getElementById ("all")

const transition = (()=>{
    result.classList.add ("showResult")
    all.classList.add ("all") 
            btn.addEventListener ("click",()=>{
                result.classList.remove ("showResult")       
                all.classList.remove ("all")
                location.reload()
            })
})

button.addEventListener ("click",()=>{
    let num1 = valores[2] - valores[0]
    let num2 = valores[1] + num1
    let num3= velocidades[num2]
        if (num3 == undefined){
            p.innerHTML = "La velocidad correspondiente no existe en nuestro contador"
            transition()
        } else {
            p.innerHTML = `Para su cámara con diafragma ${diafragmas[valores[2]]} la velocidad es de ${num3}`
            transition()
        }
})

