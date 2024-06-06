// Minutos a segundos

// Crear un programa que pida ingresar una cantidad en minutos y muestre un mensaje con el resultado de la conversión en segundos.


function minutosASegundos () {
    let minutos = prompt ("Ingrese cantidad de minutos");
    let segundos = minutos * 60;
    alert ("Su cantidad de minutos en segundos es: " + segundos);
}

minutosASegundos();