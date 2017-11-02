numeroAleatorio=Math.floor(Math.random()*(96-123+1)+123);
console.log(numeroAleatorio);

var letra = String.fromCharCode(numeroAleatorio);
console.log(letra);

var letraUsuario = prompt("Dime una letra");


while (letraUsuario!= letraUsuario.toLowerCase()) {
  alert("La letra es mayuscula");
  var letraUsuario = prompt("Escribe una letra minuscula");
}

var bucle=false;
var intentos=0;

while (letraUsuario!=letra && intentos<5) {
  var letraUsuario = prompt("Fallaste, dime otra letra");
  intentos++;

  if (letraUsuario==letra) {
    document.write("Acertaste");
  var bucle=true;
  }
}
