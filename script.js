 // Ejercicios Básicos 

 // #1 Suma de dos números : Escribir un algoritmo que pregunta por dos números y que muestre como resultado la suma de estos.
 // Use pseudocódigo y diagrama de flujo 

function sumar(num1, num2){  //Se declara la función llamada suma, y dice que recibe 2 numeros.
    var resultado;
    resultado = num1 + num2;  // se dice que el resultado será la suma de dichos números. 
    return resultado;		  // llama al resultado.
} 


//#2 Promedio de 3 números : Escriba un algoritmo que prefunte por 3 números y muestre como resultado el promedio de estos.
//Use pseudocódigo y diagrama de flujo
function promedio(nota1, nota2,nota3){ //se declara que recibira 3 números
	var suma = nota1 + nota2 + nota3;  // primero se suman dichas notas
	var promedio = suma /3;			// el promedio será el resultado de la suma dividido por la cantidad de números.
	return promedio;
}

//#5 Sueldo: Se requiere determinar el sueldo semanal de un trabajador con base en las horas que trabaja y el pago por hora que recibe.
// Realice el diagrama de flujo y el pseudocódigo que representen el algoritmo de solución correspondiente.
function sueldoSemanal(pagoHora, horaTrabajadas){ 
	var pago = pagoHora * horaTrabajadas;          
	return pago; 
}


//#7 Pinturas "La Brocha Gorda" : Pinturas "La brocha gorda" requiere determinar cuánto cobrar por trabajos de pintura. 
//Considere que se cobra por m2 y realice un diagrama de flujo y pseudocódigo que representen el algoritmo que le permita ir generando presupuestos para cada cliente. 
function pagoPintura (m2, metrosPintados) {  
	var valor = m2 * metrosPintados;
	return valor;
}

//#9 Llamada Telefónica : Se requiere un algoritmo para determinar el costo que tendrá realizar una llamada telefónica con base en el tiempo que dura la llamada y el costo por minuto.
// Represente la solución mediante el diagrama de flujo y pseudocódigo 
function llamadaTelefonica (minutoHablado, costoMinuto) {
	var valor = minutoHablado * costoMinuto;
	return valor;
}

// Página 2 y 3 

//#1 División de números: Haz un programa que sirva para dividir números
// ¿Qué sucede si en lugar de dividir dos números, intentamos dividir dos textos? R: El error que aparece es NaN (no es un número)
//¿Qué sucede si el divisor es el número 0? R: El resultado es 0.
function dividirDosNumeros(num1, num2) {
	var num1 = prompt("Ingrese un divisor");
	var num2 = prompt("Ingrese un dividendo");
	resultado = num1 / num2;
    return resultado;
}


//#2  Conversión de edad : Haz un programa que funcione de la siguiente forma 
//El programa nos pregunta nuestro nombre
//El programa pregunta nuestra edad  
//El programa da como resultado nuestro nombre y a continuacion los dias que hemos vivido hasta el momento (deberás multiplicar la edad por 365)
function diasVividos(){
	var nombre = prompt("Cuál es tú nombre?");
	var edad = parseInt(prompt("ingresa tu edad"));
	var resultado = edad*365;
	alert(" Hola " + nombre + " Tú has vivido " + resultado + " días ");
}

//#3 Formato de output: Haz un programa de que funcione de la siguiente forma: 
//El programa nos pide nuestro nombre 
//El programa nos pide nuestro apellido 
//El programa nos pide en qué población que vivimos
//El programa presenta una pantalla aproximadamente igual a la siguiente 
// Hola nombre apellido 
// Adiós habitante de población 
function habiantePoblacion(){
	var nombre = prompt("¿Cuál es tu nombre?");
	var apellido = prompt("¿Cuál es tu apellido?");
	var poblacion = prompt("¿En que población vives?");
 	alert("Hola " + nombre + " " + apellido + "\nAdios habitante de " + poblacion);
}

//#4 Contadores: Haz un programa que funcione de la siguiente forma:
// El programa nos pide un número, utiliza tres contadores 
//·Primer contador: suma 5 al número introducido
//·Segundo contador: suma 21 al resultado obtenido con el primer contador
//·Tercer contador: resta 4 al resultado obtenido con el segundo contador
//El programa nos presenta los 4 números de la siguiente forma: 
//·La primera linea: el número introducido, la segunda linea: los tres números tabulados. que han resultado de los tres contadores. 
function contadores(){
	var numero = parseInt(prompt("Ingrese un número"));
	var primero = numero + 5;
	var segundo = primero + 21;
	var tercero = segundo - 4;
	alert(" El número introducido " + numero +  "\nContadores  " + primero + "	" + segundo + " 	" + tercero);
}


//#5 Producto escalar
// Haz un programa que sirva para calcular el producto escalar de dos vectores del plano. La forma de calcularlo es la siguiente: U*V=(u1*v1)+(u2*v2)
//Ejemplo: El producto escalar de los vectores se calcula asi: (-2,3)*(5,-2)=(-2*5)+(3*-2)= -10 -6= -16
//La "Salida" ha de ser de la siguiente forma: comprueba el funcionamiento del programa usando el caso concreto que aparece en la ilustración.
//El producto escalar de los vectores: 
//(-2, 2) y (5,-2)es -16



// #7 Área del circulo : haz un programa que calcule el área de un circulo. 


