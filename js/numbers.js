/* Ejercicios de numbers ------------------------------------------ */

/* Hallar el valor mayor de dos (2) numeros */

/* Elementos de numeros */
let num_1 = document.getElementById('number_1');
let num_2 = document.getElementById('number_2');

/* Elementos de resultado */
let resultado = document.getElementById('resultado');
let resultado_suma = document.getElementById('resultado-suma');
let resultado_resta = document.getElementById('resultado-resta');
let resultado_multiplicacion = document.getElementById('resultado-multiplicacion');
let resultado_division = document.getElementById('resultado-division');
let resultado_raiz = document.getElementById('resultado-raiz');

/* Boton de resultado */
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

/* Operaciones con 2 numeros */

function operaciones_con_numeros() {

    let num1 = Number(num_1.value);
    let num2 = Number(num_2.value);

    /* Suma */
    resultado_suma.innerText = `El resultado de sumar es ${num1} + ${num2} = ${num1 + num2}`;

    /* Resta */
    resultado_resta.innerText = `El resultado de restar es ${num1} - ${num2} = ${num1 - num2}`;

    /* Multiplicacion */

    resultado_multiplicacion.innerText = `El resultado de multiplicar es ${num1} * ${num2} = ${num1 * num2}`;

    /* Division */

    resultado_division.innerText = `El resultado de dividir ambos numeros es ${num1} / ${num2} = ${(num1 / num2).toFixed(3)}`;

    /* Raiz */
    resultado_raiz.innerText = `Las raices de los numeros son raiz de ${num1} = ${Math.sqrt(num1)} y raiz de ${num2} = ${Math.sqrt(num2)}`

}


/* Event listener del boton */
comparar_numeros.addEventListener('click', () => {
    if(num_1 && num_2){
        biggestNumber();
        operaciones_con_numeros();
    } else {
        console.log('debes ingresar valores en los inputs de numeros');
    }
})

/* Button string */
let string_button = document.getElementById('operaciones-string');

/* Text area string */
let text_area_string = document.getElementById('string-area');

/* Resultados string */
let string_length = document.getElementById('string-length');
let string_reverse = document. getElementById('string-reverse');
let string_repeat = document.getElementById('string-repeat');

function string_operations() {
    string_length.innerText = `La longitud de la cadena de texto es = ${text_area_string.value.length}`

    string_reverse.innerText = `La cadena de texto invertida es: "${text_area_string.value.split('').reverse().join('')}"`

    string_repeat.innerText = `El texto repetido es: "${text_area_string.value}"`
};

string_button.addEventListener('click', () => {
    string_operations();
});

/* ARRAY */

let array_area = document.getElementById('array-area');
let array_start = document.getElementById('array-start');
let array_button = document.getElementById('operaciones-array');
let array_initial = document.getElementById('initial-array');
let array_reverse = document.getElementById('array-reverse');

let arr = ['ultimo elemento'];

array_initial.innerText = `El ultimo elemento del array es: ['${arr}']`;

function array_operations() {

    array_area.value.split('').join('').split(/\s*,\s*/).map(element => {
        arr.unshift(element);
    })

    console.log(arr);

    array_start.innerText = `El nuevo array con elementos al principio es: ${arr.join(' ')}`;

    array_reverse.innerText = `El array invertido es ${arr.reverse()}`;

}

array_button.addEventListener('click', () => {
    array_operations();
})


/* Array de numeros */

let number_array = [10, 25, 3, 5, 8, 75];

let array_values = document.getElementById('array-sum-values');
let array_suma = document.getElementById('array-sum-result');
let button_array = document.getElementById('suma-array');

array_values.innerText = number_array.join(', ');

button_array.addEventListener('click', () => {

    let result = array_suma.innerText = number_array.reduce((a, b) => {
        return a + b
     })

     console.log(result);
    
});

/* Iteradores */

let new_arr = [5, 10, 25, 33, 88, 150];
let iterador_result = document.getElementById('iterador-array');
let iterador_multiplicacion = document.getElementById('iterador-multiplicacion');
let iterador_indices = document.getElementById('iterador-indice');
let button_iterador = document.getElementById('iterador-button');
let array_valores = document.getElementById('iterador-valores');

array_valores.innerText = `Este es el array que se va a iterar: ${new_arr.join(', ')}`

function iterateArr(arr) {

    for(let i = 0; i < arr.length; i++){
        iterador_result.innerText += arr[i] + '-';
        iterador_multiplicacion.innerText += arr[i]*2 + '-';
        iterador_indices.innerText += i + '-';
        console.log(`El elemento del array es ${arr[i]} y multiplicado por * 2 = ${arr[i]*2} y su indice es ${i}`);
    }
}

button_iterador.addEventListener('click', () => {
    if(!iterador_result.innerText){
        iterateArr(new_arr);
    } else {
        iterador_result.innerText = '';
        iterador_multiplicacion.innerText = '';
        iterador_indices.innerText = '';
        iterateArr(new_arr);
    }
    
})