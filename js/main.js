let loaded = (eventLoaded) => {
  let myform = document.getElementById("formulario");
  myform.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();
    if (form_name.value.length == 0) {
      alert("Nombre requerido");
      form_name.focus();
      return;
    }
    if (form_mail.value.length == 0) {
      alert("Correo Requerido");
      form_name.focus();
      return;
    }
    const nombre = document.getElementById("form_name").value;
    const email = document.getElementById("form_mail").value;
    const datos = {
      nombre: nombre,
      email: email
    };
    fetch(
      "https://pruebadatabase-19847-default-rtdb.firebaseio.com/collection.json",
      {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos); // Imprimir la respuesta del
      })
      .catch((error) => console.error(error));
  });
};

window.addEventListener("DOMContentLoaded", loaded);
