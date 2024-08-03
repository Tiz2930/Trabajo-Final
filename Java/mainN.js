let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let consulta = document.getElementById("consulta");
let btnEnviar = document.getElementById("btn-consulta");
const form = document.getElementById("form-consulta");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // Previene la acción predeterminada del formulario

    // Verificar si el formulario es válido
    if (form.reportValidity()) {
        // Obtener los valores de los campos
        const informacion = [
            nombre.value.trim(),
            apellido.value.trim(),
            telefono.value.trim(),
            email.value.trim(),
            consulta.value.trim()
        ];

        // Librería FileSaver.js
        const blob = new Blob([informacion.join("\n")], { type: "text/plain; charset=utf-8" });
        saveAs(blob, "contactos.txt");
    }
});
