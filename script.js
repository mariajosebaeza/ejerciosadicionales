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
	alert(" El número introducido " + numero +  "\nContadores  " + primero + "	 " + segundo + "   " + tercero);
}


//#5 Producto escalar
// Haz un programa que sirva para calcular el producto escalar de dos vectores del plano. 
//La forma de calcularlo es la siguiente: U*V=(u1*v1)+(u2*v2)
//Ejemplo: El producto escalar de los vectores se calcula asi: 
//(-2,3)*(5,-2)=(-2*5)+(3*-2)= -10 -6= -16
//La "Salida" ha de ser de la siguiente forma: comprueba el 
//funcionamiento del programa usando el caso concreto que aparece en la ilustración.
//El producto escalar de los vectores: 
//(-2, 2) y (5,-2)es -16
function productoEscalar(){
	var u1 = parseInt(prompt("Ingrese el primer número del vector 1"));
	var v1 = parseInt(prompt("Ingrese el segundo número del vector 1"));
	var u2 = parseInt(prompt("Ingrese el primer número del vector 2"));
	var v2 = parseInt(prompt("Ingrese el segundo número del vector 2"));
	var aux = (u1*v1)+(u2*v2);
	alert("El producto escalar de los vectores ("+u1+", "+v1+") y ("+u2+", "+v2+") es "+aux);
}


// #7 Área del circulo : haz un programa que calcule el área de un circulo. 
function areaCirculo(){
	var radio = parseInt(prompt("Ingrese el radio del circulo"));
	var resultado = Math.PI * (radio * radio);
	alert("El area del circulo es " + resultado);
}

//#8 Área del triangulo: Corrige el programa y explica para que sirve
function areaTriangulo(){
	var a,b;
	a= parseInt(prompt("Ingrese la altura del triángulo")); //acá debe ir parseInt para cambiar el string por número, y además falta el ";"
	b= parseInt(prompt("Ingrese la base del triángulo")); // igual que arriba, falta parseInt y ";"
	alert("El área del triángulo es " + (a*b/2)); // faltaba un parentésis para cerrar el alert
}

//Ejercicios Condicionales 
//#1 Aprobado o reprobado: Se pide leer tres notas de un alumnos. Obtener su nota en un rango del 1 al 10 y enviar un mensaje donde diga si el alumno aprobó o reprobó el curso (tomar en cuenta que si obtiene 6 o más aprueba, de lo contrario no)
//Exprese el algoritmo usando pseudocódigo y diagrama de flujos 

function promedioAlumno(){                                //se declara la funcion 
	var nota1 = parseInt(prompt("Ingrese primera nota")); // se pide que el usuario ingrese las notas, asi 3 veces 
	var nota2 = parseInt(prompt("Ingrese segunda nota"));
	var nota3 = parseInt(prompt("Ingrese tercera nota"));
	var suma = nota1 + nota2 + nota3;                    // primero se suman dichas notas
	var promedio = suma /3;			                    // el promedio será el resultado de la suma dividido por la cantidad de números, en este caso 3.
	if (promedio >= 6)                                  // si el promedio es mayor o igual a 6, el alumno aprueba 
   	    alert("Aprobaste");
    else 
      	alert("Reprobaste");                            // si el promedio es menor a 6, el alumno reprueba. 
}

//#2 Cuál es el número más grande ? Se desea implementar un algoritmo para determinar cuál de dos valores proporcionados es el mayor. 
// Representarlo con pseudocódigo y diagrama de flujo.
function numeroMayor(){
	var iNumero1 = parseInt(prompt("Ingrese primer número"));
	var iNumero2 = parseInt(prompt("Ingrese Segundo número"));
	if (iNumero1 > iNumero2)
  		alert(iNumero1 + " es mayor que " + iNumero2);
	else
  		alert(iNumero2 + " es mayor que " + iNumero1);
}

//#4 : Almacenes "El harapiento distinguido" 
// Almacenes "El harapiento distinguido" tiene una promoción: a todos los trajes que tienen un precio superior a $250.000
// se les aplicará un descuento de 15% a todos los demás se les aplicará solo 8%
// Realice un algoritmo para determinar el precio final que debe pagar una persona por comprar un traje 
// y de cuanto es el descuento que obtendrá.
// Representelo mediante el pseudocódigo, el diagráma de flujo.
function descuentoRopa (){
	var valor = parseInt(prompt("Ingrese el valor de su traje"));
	if (valor > 250.000)
		alert("Su descuento es del 15%, el precio final es de $"+valor*0.85);
	else ( valor < 250.000)
		alert("Su descuento es del 8%, el precio final es de $"+valor*0.92);
} 		

//#5 El mayor de los números
// Se requiere determinar cuál de tres cantidades proporcionadas es la mayor.
//Realizar su respectivo algoritmo y representarlo mediante un diagrama de flujo y pseudocodigo.

function mayorTres (){
	var iNumero1 = parseInt(prompt("Ingrese primer número"));
	var iNumero2 = parseInt(prompt("Ingrese segundo número"));
	var iNumero3 = parseInt(prompt("Ingrese tercer número"));
if (numero1 == numero2 && numero1 == numero3){
   alert("Numero 1, Numero 2 y Numero 3 son iguales y su valor es :  "+ numero1 +" ");
   }
   else{
      if (numero1 > numero2){
         if (numero1 > numero3){
            alert("Numero 1 es Mayor y vale: "+ numero1+ " ");
            }
            else{
               alert("Numero 3 es Mayor y vale: "+ numero3 +" ");
               }
      }
      else{
         if(numero1 < numero2){
    }

//#9 Hamburguesas "El náufrago satisfecho"
// ofrece hamburguesas sencillas, dobles y triples, las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente.
//La empresa acepta tarjetas de crédito con cargo de 5% sobre la compra. Suponiendo que los clientes adquieren solo un tip de hamburguesa,
// realiza un algotirmo para determinar cuánto debe pagar una persona por N hambuguesas.
//Represéntelo mediante diagrama de flujo y pseudocódigo.
function descuentoHamburguesa (){
	var sencilla = 20.00;
	var doble = 25.00;
	var triple = 28.00;
	var tipo = parseInt(prompt("Ingrese tipo de su hambuguesa (sencilla, doble o triple)"));
	var cantidad = parseInt(prompt("Ingrese la cantidad de hambuguesa"));
	var total = tipo * cantidad;
	var pago = prompt("Su pago es con tarjeta de crédito?");
	if (pago == si)
		alert("Su cargo es del 5%, el precio final es de $"+ (tipo*cantidad)*0.95);
	else (pago == no)
		alert("No tiene cargo en su compra, y el precio final es de $ " + total );
}






