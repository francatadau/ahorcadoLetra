var bucle=false;
var intentos=0;
var letra="";
var letraUsuario="";

numeroAleatorio=Math.floor(Math.random()*(96-123+1)+123);
console.log(numeroAleatorio);

letra = String.fromCharCode(numeroAleatorio);
console.log(letra);

letraUsuario = prompt("Dime una letra");


while (letraUsuario!= letraUsuario.toLowerCase()) {
  alert("La letra es mayuscula");
  letraUsuario = prompt("Escribe una letra minuscula");
}

while (letraUsuario!=letra && intentos<5) {
  letraUsuario = prompt("Fallaste, dime otra letra");
  intentos++;

  if (letraUsuario==letra) {
    document.write("Acertaste");
    bucle=true;
  }
}
