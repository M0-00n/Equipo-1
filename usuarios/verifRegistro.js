document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formRegistroUsuario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario hasta validar

    // Limpiar mensajes de error previos
    const errores = document.querySelectorAll(".error");
    errores.forEach((error) => error.remove());

    let esValido = true;

    // Validación de Nombre y Apellido (no números)
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    if (nombre.value.trim().length < 5 || !/^[a-zA-Z\s]+$/.test(nombre.value)) {
    esValido = false;
    mostrarError(nombre, "El nombre debe tener al menos 5 caracteres y no puede contener números.");
    }

    if (apellido.value.trim().length < 5 || !/^[a-zA-Z\s]+$/.test(apellido.value)) {
    esValido = false;
    mostrarError(apellido, "El apellido debe tener al menos 5 caracteres y no puede contener números.");
    }

    // Validación de Correo Electrónico (estructura válida)
    const correo = document.getElementById("correo");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo.value)) {
    esValido = false;
    mostrarError(correo, "El correo electrónico no tiene una estructura válida.");
    }

    // Validación de Contraseña
    const contrasena = document.getElementById("contrasena");
    const contrasenaConfirmar = document.getElementById("contrasenaConfirmar");
    if (contrasena.value.length < 5 || contrasena.value.length > 15) {
    esValido = false;
    mostrarError(contrasena, "La contraseña debe tener entre 5 y 15 caracteres.");
    }
    if (contrasenaConfirmar && contrasena.value !== contrasenaConfirmar.value) {
    esValido = false;
    mostrarError(contrasenaConfirmar, "Las contraseñas no coinciden.");
    }

    // Validación de Teléfono (solo números)
    const telefono = document.getElementById("telefono");
    const telefonoPattern = /^\d{10}$/;
    if (!telefonoPattern.test(telefono.value)) {
    esValido = false;
    mostrarError(telefono, "El teléfono debe contener exactamente 10 dígitos numéricos.");
    }

    // Validación de Código Postal (solo números)
    const codigopostal = document.getElementById("codigopostal");
    const codigoPostalPattern = /^\d{5}$/;
    if (!codigoPostalPattern.test(codigopostal.value)) {
    esValido = false;
    mostrarError(codigopostal, "El código postal debe contener exactamente 5 dígitos numéricos.");
    }

    // Validación de Delegación
    const delegacion = document.getElementById("delegacion");
    if (delegacion.value === "Seleccione una opción...") {
    esValido = false;
    mostrarError(delegacion, "Debe seleccionar una delegación.");
    }

    // Mostrar errores si hay alguno
    if (!esValido) {
    return;
    }

    // Si todo es válido, puedes proceder con el envío (o hacer alguna otra acción)
    alert("Formulario enviado correctamente.");
    this.submit(); // Solo se enviaría si todos los campos son válidos
});

// Función para mostrar los errores en el formulario
function mostrarError(campo, mensaje) {
    const error = document.createElement("div");
    error.classList.add("error", "text-danger");
    error.innerText = mensaje;
    campo.classList.add("is-invalid");
    campo.parentNode.appendChild(error);
}
} //Se sube?
