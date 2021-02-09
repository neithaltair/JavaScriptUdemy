/* Ejemplos de tipos de datos en JS */
//Tipo de dato String
var nombre = "Cadena de String";
console.log(nombre);

//Reutilizar variable
//Saber que tipo de variable es con TYPEOF
nombre = 12345
console.log(typeof nombre)

//tipo de dato numerico
var numero = 12345;
console.log(numero);

//Tipo de dato object
var objeto = {
    name : "altair",
    apellido : "neith",
    telefono : 3214349086
}
console.log(objeto)

//tipo de dato Booleano (true, false)
var bandera = true;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);


//Tipo de clase es una function
class Persona{
    //Constructor permite crear un objeto de la clase
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona)


//tipo de undefined
var x; 
console.log(x);


//null = ausencia de valor
var y = null;
console.log(y);


//Arreglos es un tipo object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);

