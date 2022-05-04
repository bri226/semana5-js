//console.log("Hola Peru");

//Arrow Notation
const cube = x => {
    console.log("Es funcion cube...");
    return x*x*x;
}

const cube2 = x => x*x*x;

const sum = (a,b) => a+b;
//funcion regular en Javascript


function square(n){
    return n*n;
}

function greet(){
    return "Hola mundo";
}

/*
    Dados los 3 lados de un triangulo a, b, c , implemente
    una funcion que retorne una cadena con el tipo de triangulo: 
    escaleno, equilatero, isosceles
*/

const getTriangleType = (a,b,c) =>{
    if(a==b && b==c && a==c){
        return "Equilatero";
    }else{
        if(a==b || a==c || b==c){
            return "Isosceles";
        }else{
            return "Escaleno";
        }
    }
}

/*
    Implemente una funcion que reciba un entero n y retorne la suma
    de los numeros enteros entre 1 y n (inclusive). Muestre en consola
    cada uno de estos valores.
*/

const getSum = n =>{
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        console.log(i);
        suma += i;
     }
     return suma;
}

const test = _ =>{
    let values = [2,3,4];
    console.log(values);
    values.push(20);
    console.log(values);
    return values;
}


/*
    Implemente una funcion que reciba un entero n y retorne un array
    con la suma de los numeros enteros entre 1 y n (inclusive). Muestre 
    en consola la suma total.
*/

const funcion = n =>{
    let suma = 0;
    let values = [];
    for (let i = 1; i <= n; i++) {
        values.push(i);
        suma += i;
     }
     console.log("La suma es: ",suma);
     return values;
}

/*
    Implemente una funcion que reciba un array y un valor a buscar.
    Debe retornar verdadero si el valor se encuentra en el array y falso
    en caso de no encontrarlo.
*/
const find = ( arr , x ) => {
    //Primera forma: Con indices
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==x){
            return true;
        }
    }
    return false;
}

const find2 = (arr,x) =>{
    //Segunda forma con for of
    for(let element of values){
        if(element == x){
            return true;
        }
    }
    return false;
}

//TABLERO
const showMatriz = _ =>{
    const values = [[1,2,3],[4,5,6],[7,8,9]];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[0].length; j++) {
            console.log(i,j,values[i][j]);
            //falta codigo
        }
        
    }
    return true;
}

//Retorna el nombre completo del estudiante
const getFullName = student => student.nombre + " " + student.apellido;

//Retorne verdadero si el estudiante es mayor de 18 años
const mayorDeEdad = student => student.edad >= 18 ? "Mayor de edad" : "Menor de edad";


function showResult(result){
    //Obtenemos una referencia al elemento HTML con ese ID
    //Podemos modificar sus atributos
    document.getElementById("txtResult").value = result;
}