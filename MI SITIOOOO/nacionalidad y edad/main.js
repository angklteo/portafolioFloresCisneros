alert("Vamos a conocer tu nacionalidad y edad");

nacionalidad = prompt("¿Cuál es tu nacionalidad?");
ledad = prompt("¿Cuántos años tienes?");
edad = Number(edad);
if (nacionalidad == "mexicana" && edad >= 18) {
    alert("Eres de nacionalidad mexicana y eres mayor de edad");
}
else if (nacionalidad == "mexicana" edad < 18) {
    alert("Eres de nacionalidad mexicana y eres menor de edad");
}
else if (edad >= 18) {
    alert("Tu nacionalidad es " + nacionalidad + " y eres mayor de edad");
}
else {
    alert("Tu nacionalidad es " + nacionalidad + " y eres menor de edad");
}