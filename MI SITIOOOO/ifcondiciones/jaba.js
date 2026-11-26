alert("Veremos si un numero es par o  impar");
numero = prompt("Dime un numero");
numero = Number(numero);
//Ejemplo de modulo, si la division entre 2
//da como residuo 1, entonces, el numero es impar
//da como reciduo 0, es par
//Condiciones mutuamente excluyentes
if (nunero % 2 == 0) {
    document.write("<h1>El numero es par</h1");
}
else {
    document.write("<h1>El numero es impar</h1>")
}