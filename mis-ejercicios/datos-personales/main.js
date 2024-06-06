// Datos personales

// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

function datosPersonales (nombre, apellido, edad, nacionalidad, documento) {
    alert ("Nuevo usuario agregado al sistema: " + nombre + " " + apellido + ", " + edad + " años, " + nacionalidad + ", d.n.i: " + documento +".");
}

datosPersonales (prompt ("Ingrese su nombre") , prompt ("Ingrese su apellido") , prompt ("Ingrese su edad") , prompt ("Ingrese su nacionalidad") , prompt ("Ingrese su documento"));