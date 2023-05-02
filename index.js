/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNumber = document.getElementById("input-number")
let convertBtn = document.getElementById("btn-convert")
let lengthAns = document.getElementById("length-ans")
let volumeAns = document.getElementById("volume-ans")
let massAns = document.getElementById("mass-ans")
const meterFeet = 3.281
const literGallon = 0.264
const kiloPound = 2.204

convertBtn.addEventListener("click", function(){
    const inputedNumber = Number(inputNumber.value)
    length(inputedNumber)
    volume(inputedNumber)
    mass(inputedNumber)
})

function length(inputedNumber){
    lengthAns.innerHTML = `${inputedNumber} meters = ${(inputedNumber * meterFeet).toFixed(3)} feet | ${inputedNumber} feet = ${(inputedNumber / meterFeet).toFixed(3)} meters `
}
function volume(inputedNumber){
    volumeAns.innerHTML = `${inputedNumber} liters = ${(inputedNumber * literGallon).toFixed(3)} gallons | ${inputedNumber} gallons = ${(inputedNumber / literGallon).toFixed(3)} liters `
}
function mass(inputedNumber){
    massAns.innerHTML = `${inputedNumber} kilos = ${(inputedNumber * kiloPound).toFixed(3)} pounds | ${inputedNumber} pounds = ${(inputedNumber / kiloPound).toFixed(3)} kilos `
}