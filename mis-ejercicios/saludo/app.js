//Cuando la consigna pida ingresar algo hacerlo mediante un prompt, y cuando pida mostrar un mensaje hacerlo mediante alert. Usar const, let y template strings.

//Saludo
//Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

//       MI EJERCICIO

// function saludo (name, surname) {
//     alert ("¡Hola " + name + " " + surname + ", bienvenida a ADA!")
// }

// saludo ( prompt ("Escriba su nombre: "), prompt ("Escriba su apellido: "))


//      OTRAS FORMAS DE REALIZARLO


//**DE ESTA MANERA FUNCIONA PERO SE PUEDE HACER DE OTRAS MANERAS**

// let firstname = prompt ("Ingrese su nombre");
// let surname = prompt ("Ingrese su apellido");
// alert (`Hola ${firstname} ${surname}, bienvenida a ADA`);


//**DE ESTA MANERA TAMBIEN FUNCIONA, SE LE AÑADE UNA CONST CON EL MENSAJE Y EJECUTAMOS UN ALERT QUE LLAME A ESE MENSAJE.

// let name = prompt ("Ingrese su nombre");
// let surname = prompt ("Ingrese su apellido");
// const saludo = `Hola ${name} ${surname}, bienvenida a ADA`
// alert (saludo);
// **

//**ejemplo del uso de template strings: tengo una variable con el valor "carolina", ejecuto otra variable y le agrego un mensaje utilizando template strings `ingrese el mensaje ${}` y dentro de ${} colocamos la variable a la que queremos añadir en el mensaje. Por último, creamos un método para que al fin la ventana aparezca. **

// let name = "Carolina"
// let firstname = `Mi primer nombre es: ${name}.`;
// alert (firstname) ;



//SI LO HACEMOS DE ESTA MANERA, TENIENDO LAS VARIABLES DENTRO DE LA FUNCIÓN (SIN PARÁMETROS), POR ÚLTIMO PASO SE DEBE LLAMAR A LA FUNCIÓN POR FUERA DE LA MISMA PARA QUE SE EJECUTE.
//**

// function holaAlumnas () {
//     let nombre = prompt("Ingrese su nombre");
//     let apellido = prompt("Ingrese su apellido");
//     const mensaje = `¡Hola ${nombre} ${apellido}, bienvenida a ADA!`
//     alert (mensaje);
// }                    **fin de la función**

// holaAlumnas();  **llamando a la función para que se ejecute.

//IMPORTANTE: DE ESTA MANERA NO PUEDO COLOCAR LOS PARÁMETROS EN LA FUNCIÓN, YA QUE AL TENER VARIABLES LES ESTOY ASIGNANDO YA UN VALOR.
//**































//**