const persona = {
    nombre: 'Jose',
    apellido: 'Melendez',
    edad: 24
}


const nombrePersona = (nombre) => (`El nombre es ${nombre}`);


const nombre = persona.nombre;
console.log(nombrePersona(nombre));