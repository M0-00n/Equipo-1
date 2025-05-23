/* Página de contacto */

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        let valid = true;

        // Validar nombre y apellidos (solo letras y espacios)
        const nombre = document.querySelector('input[name="nombre"]');
        const apellidos = document.querySelector('input[name="apellidos"]');
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        if (!regexNombre.test(nombre.value.trim())) {
            alert("El nombre solo debe contener letras y espacios.");
            valid = false;
        }

        if (!regexNombre.test(apellidos.value.trim())) {
            alert("Los apellidos solo deben contener letras y espacios.");
            valid = false;
        }

        // Validar teléfono (solo números, entre 8 y 15 dígitos)
        const telefono = document.querySelector('input[name="telefono"]');
        const regexTelefono = /^\d{8,15}$/;

        if (!regexTelefono.test(telefono.value.trim())) {
            alert("El teléfono debe contener solo números y tener entre 8 y 15 dígitos.");
            valid = false;
        }

        // Validar correo electrónico
        const correo = document.querySelector('input[name="correo"]');
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexCorreo.test(correo.value.trim())) {
            alert("Ingresa un correo electrónico válido.");
            valid = false;
        }

        // Validar mensaje (mínimo 10 caracteres)
        const mensaje = document.querySelector('textarea[name="mensaje"]');

        if (mensaje.value.trim().length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            valid = false;
        }

        // Evita el envío si hay errores
        if (!valid) {
            event.preventDefault();
        }
    });

});
