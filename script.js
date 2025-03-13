/* Página: Sobre nosotras */
//Puntero de circulos
document.addEventListener("DOMContentLoaded", function () {
    const cuerpo = document.getElementById("cuerpo"); 
    console.log("Cuerpo encontrado:", cuerpo);


    if (!cuerpo) {
        console.error("El elemento con ID 'cuerpo' no existe.");
        return;
    }

    cuerpo.addEventListener("click", function (event) {
        // Crear un círculo
        const circle = document.createElement("div");
        circle.classList.add("click-circle");

        // Posicionar el círculo donde se hizo clic dentro del `main`
        const x = event.clientX;
        const y = event.clientY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        // Agregar el círculo al `body`
        document.body.appendChild(circle);

        // Eliminar el círculo después de 3 segundos
        setTimeout(() => {
            circle.remove();
        }, 3000); 
    });
    console.log("si funciona")
});

/* Página de contacto */

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        let valid = true;

        // Validar nombre y apellidos (solo letras)
        document.querySelectorAll('input[name="nombre"], input[name="apellidos"]').forEach(input => {
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(input.value.trim())) {
                alert("El nombre y los apellidos solo deben contener letras y espacios.");
                valid = false;
            }
        });

        // Validar teléfono (solo números, mínimo 8 dígitos)
        const telefono = document.querySelector('input[name="telefono"]').value.trim();
        if (!/^\d{8,15}$/.test(telefono)) {
            alert("El teléfono debe contener solo números y tener entre 8 y 15 dígitos.");
            valid = false;
        }

        // Validar correo electrónico
        const correo = document.querySelector('input[name="correo"]').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingresa un correo electrónico válido.");
            valid = false;
        }

        // Validar mensaje (mínimo 10 caracteres)
        const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();
        if (mensaje.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            valid = false;
        }

        // Evita el envío si hay errores
        if (!valid) {
            event.preventDefault();
        }
    });
});


