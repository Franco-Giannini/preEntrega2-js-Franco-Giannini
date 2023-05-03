alert("Bienvenido empleado! ingrese sus datos para realizar la operacion y saber acerca de su suelto en neto")

// datos del empleado
const nombre = prompt("Ingrese su nombre:");
const edad = parseInt(prompt("Ingrese su edad:"));
const salario = parseFloat(prompt("Ingrese su salario:"));

let impuesto = 0;
let aumento = 0;
let nuevoSalario = 0;

//obra social
function calcularObraSocial(salario) {
  return salario * 0.3;
}

//aumento por año
function calcularAumento(salario) {
  if (salario < 100000) {
    return salario * 0.1;
  } else {
    return salario * 0.1;
  }
}

function datosEmpleado(nombre, edad) {
  return nombre + " tiene " + edad + " años.";
}

//porcentaje porque queria meter algo para que tenga un poco mas de contenido
function calcularPorcentaje(valor, porcentaje) {
  return valor * (porcentaje / 100);
}
const persona = {
  nombre: nombre,
  edad: edad,
  salario: salario,
};

// operaciones
impuesto = calcularObraSocial(salario);
aumento = calcularAumento(salario);
nuevoSalario = salario + aumento - impuesto;
const mensaje = datosEmpleado(nombre, edad);
const porcentajeSalario = calcularPorcentaje(salario, 10);

// todos los resultados
alert("Obra social a pagar:$"+ impuesto);
alert("Aumento de salario por año:$"+ aumento);
alert("Salario neto:$"+ nuevoSalario);
alert("10% de salario:$" + porcentajeSalario);
alert('Gracias por usar nuestro servicio para calcular salarios, prosiga trabajando toda su vida para nosotros')


