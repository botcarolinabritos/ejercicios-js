
// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// esConsonante('a') // false
// esConsonante('n') // true


// function esConsonante (LetraEne) {
//     if (LetraEne == true) {
//         console.log("Si es consonante", true);
//     } else {
//         console.log("Si no es consonante", false);
//     }
// }
// esConsonante(true)


function esConsonante(letra = "") {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        console.log("Es vocal")}
    else if (letra == "b" || letra == "c" || letra == "d" || letra == "f" || letra == "g" || letra == "h" || letra == "j" || letra == "k" || letra == "l" || letra == "m" || letra == "n" || letra == "ñ" || letra == "p" || letra == "q" || letra == "r" || letra == "s" || letra == "t" || letra == "v" || letra == "w" || letra == "x" || letra == "y" || letra == "z"){
    console.log("Es consonante")}
    else {
        console.log("Error. Caracter incorrecto");
    }
}

esConsonante (prompt("Escriba una letra: "));