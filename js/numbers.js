/* EJERCICIOS DE NUMBERS */
let num_1 = document.getElementById('num1');
let num_2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');

/* valor de dos numeros */

function biggestNumber(/*{number_1, number_2}*/) {

    let number_1 = prompt('Coloca el primer numero');
    let number_2 = prompt('Coloca el segundo numero');
    
    /* VERIFICANDO el valor colocado por el usuario */
    console.log(`El numero 1 = ${number_1} es un ${typeof number_1} y el numero 2 = ${number_2} es un ${typeof number_2}`)

    let num1 = Number(number_1);
    let num2 = Number(number_2);
    
    if((num1) - (num2) > 0){
        num_1.innerText = num1;
        num_2.innerText = num2;
        return resultado.innerText = `El mayor de los numeros es ${number_1}`
    } else if((num1) - (num2) == 0) {
        num_1.innerText = num1;
        num_2.innerText = num2;
        return resultado.innerText = `${num1} es igual a ${num2}`
    } else {
        num_1.innerText = num1;
        num_2.innerText = num2;
        return resultado.innerText = `${num2} es el mayor de los 2 numeros`
    }
};

console.log(biggestNumber())