document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".contact-form");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const descripcion = document.querySelector("#descripcion").value;
    const mensaje =
      "Nombre: " + nombre + "\n" +
      "Email: " + email + "\n" +
      "Descripción: " + descripcion;
    alert(mensaje);
  });
});