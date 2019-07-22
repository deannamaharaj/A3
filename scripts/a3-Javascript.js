/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cToF() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input * 9/5) + 32).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " degrees Celsius is equal to: " + returnValue + " degrees Fahrenheit.";
}
function fToC() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input - 32) * 5/9).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " degrees Fahrenheit is equal to: " + returnValue + " degrees Celsius.";
}
function ftToM() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input/ 3.2808)).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " foot/feet is equal to: " + returnValue + " meter(s).";
}
function mToFt() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input * 3.2808)).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " meter(s) is equal to: " + returnValue + " foot/feet.";
}
function inToCm() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input * 2.54)).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " inch(es) is equal to: " + returnValue + " centimeter(s).";
}
function cmToIn() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input/2.54)).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " centimeter(s) is equal to: " + returnValue + " inch(es).";
}
function lbToKg() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input/2.2046)).toFixed(2);
    document.getElementById("displayConversion").innerHTML = 
    input + " pounds(s) is equal to: " + returnValue + " kilograms(s).";
}
function kgToLb() {
    var input = document.getElementById("userInput").value;
    var returnValue = ((input * 2.2046)).toFixed(2);
    document.getElementById("displayConversion").innerHTML =
    input + " kilogram(s) is equal to: " + returnValue + " pound(s).";
}
function reset() {
    document.getElementById("userInput").value = "";
    document.getElementById("displayConversion").innerHTML = "";
    document.getElementById("userInput").focus();
}