//Seleccionar los elementos y guardarlos en variaables para manipularlos
const input = document.querySelector("#message");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

//Agregar un listener al boton
btn.addEventListener("click", () => {
  var valor = input.value;
  output.innerHTML = valor;
  input.value = "";
});
