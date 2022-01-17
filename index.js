//Declaracion de funciones
// let resultado = 0;
// let op1 = 10;
// let op2 = 5;
// // DECLARACION DE FUNCIONES
// function calculadora (operacion)
// {
//     switch(operacion)
//     {
    
//         case sum:

//             resultado = op1 + op2;
//             break;
//         case "subs":
//             resultado = op1 - op2;
//             break;
//         case "mult":
//             resultado = op1 * op2;
//             break;
//         case "div":
//             resultado = op1 / op2;
//             break;
//     }
//     return resultado ;
// }
// console.log(calculadora(sum));

function calculadora(operacion)
{
    console.log(operacion);
}

function subs (op1, op2=0)
{
    return op1 - op2;
}
function mult (op1, op2=0)
{
    return op1 * op2;
}
function div (op1, op2=0)
{
    return op1 / op2;
}


let calculadora = (producto) => {console.log(producto)};
let sum = (op1,op2) => {return op1 + op2};
let subs = (op1,op2) => {return op1 - op2};
let mult = (op1,op2) => {return op1 * op2};
let div = (op1,op2) => {return op1 / op2};

function cuadrado(numb)
{
    return numb * numb;
};

module.exports = {calculadora, subs, mult, div, cuadrado};