let PI = 3.1416;
console.log(PI);

let e = 2.71325;

let name = "Pedro";
console.log(name);

name = "Juan";
console.log(name);

let suma = PI + e;
console.log(suma);

console.log(PI === name ? "verdadero" : "falso");

const vidasIniciales = 30;

// Esto causará un error porque intenta reasignar una constante
// vidasIniciales = 40;

let playername; // No hay necesidad de asignar un valor inicial aquí
const eular = 1.0;

let empty = null;

// Llama a Math.exp(3) para que haga algo
console.log(Math.exp(3));

let nombreUsuario = "Pedro";
console.log(nombreUsuario.length);
console.log(nombreUsuario.includes("P"));

const sumaValores = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};

const saludar = (nombreAImprimir) => {
    return "Hola " + nombreAImprimir + "!";
};

console.log(saludar("Pedro"));


//tarea crear 3 arrow function
// 1. Recibe cero parametros
//2. recibe 1 parametro
// 3 recibe mas de 2 parametros


const Ceroparametros = () => {
    return "aquí no hay parámetros";
}
console.log(Ceroparametros());

const Unparametro = (nombre) => {
    return "Hola señor " + nombre;
}
console.log(Unparametro("Kevyn"));

const masDeDosParametros = (para1, para2, para3) => {
    return "Esta función tiene más de dos parámetros: " + para1 + ", " + para2 + ", " + para3;
}
console.log(masDeDosParametros("yo soy uno ", "yo soy dos", "yo soy tres"));
