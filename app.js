// let celciusInputciusInput = document.querySelector('#celciusInputcius >input')
// let fahrenheitInput = document.querySelector('#fahrenheit >input')
// let kelvinInputvinInput = document.querySelector('#kelvinInputvin >input')

let celciusInput=document.getElementById("c")
let kelvinInput=document.getElementById("k")
let fahrenheitInput=document.getElementById("f")

let btn=document.getElementById("btn")

function roundNumber(number){
    return Math.round(number*100)/100
}
/*celciusInputcius to fahrenheit and kelvinInputvin */
celciusInput.addEventListener('input', function(){
    let cTemp = celciusInput.value
    let fTemp = (+cTemp*1.8) +32
    let kTemp = +cTemp + 273.15
    console.log(cTemp)

    fahrenheitInput.value = fTemp
    kelvinInput.value = kTemp
})
/*fahrenheit to celciusInputcius and kelvinInputvin*/
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp =(fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)

})

/*kelvinInputvin to celciusInputcius and fahrenheit*/
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp =kTemp -273.15 
    let fTemp =(kTemp -273.15)*(9/5) +32
    celciusInput.value = roundNumber(cTemp)
  fahrenheitInput.value= roundNumber(fTemp)

})

btn.addEventListener('click',()=>{
    celciusInput.value =""
    fahrenheitInput.value =""
    kelvinInput.value =""
console.log(2);
})
