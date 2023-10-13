/* Ejercicios de numbers ------------------------------------------ */

/* Hallar el valor mayor de dos (2) numeros */

let num_1 = document.getElementById('number_1');
let num_2 = document.getElementById('number_2');
let resultado = document.getElementById('resultado');
let comparar_numeros = document.getElementById('comparar_numeros');

/* valor de dos numeros */

function biggestNumber() {

    let num1 = Number(num_1.value);
    let num2 = Number(num_2.value);
    
    if((num1) - (num2) > 0){
        return resultado.innerText = `El mayor de los numeros es: ${num1}`
    } else if((num1) == (num2)) {
        return resultado.innerText = `${num1} es igual a ${num2}`
    } else {
        return resultado.innerText = `El mayor de los numeros es: ${num2}`
    }
};

comparar_numeros.addEventListener('click', () => {
    if(num_1 && num_2){
        biggestNumber()
    } else {
        console.log('debes ingresar valores en los inputs de numeros');
    }
})