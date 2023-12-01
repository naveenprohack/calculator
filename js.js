const input = document.getElementById("num");

const display = document.getElementById("display")
var numbers = [];
function clear(){
    input.value = "";
    console.log("clicked")
}   
function show(){
    var number;
number = input.value;
    display.innerHTML = number;
}
function add()
{
     input.value += '+';

}
function sub()
{
     input.value += '-';
}
function mul()
{
     input.value += '*';
}
function div()
{
     input.value += '/';
}
function modulo()
{
     input.value += '%';
}