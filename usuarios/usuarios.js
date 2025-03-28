
document.getElementById("botonregistrate").addEventListener("click", async function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contrasena").value;
    const telefono = document.getElementById("telefono").value;
    const delegacion = document.getElementById("delegacion").value;
    const direccion = document.getElementById("direccion").value;
    const codigoPostal = document.getElementById("codigopostal").value;

    // Obtenemos los usuarios existentes para generar el siguiente ID
let usuarios = await fetch("http://localhost:3000/usuarios")
.then(res => res.json())
.catch(error => console.error("Error al obtener usuarios:", error));

// Generar el ID basado en el último usuario o 1 si no existen usuarios
const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

// Crear el objeto con el ID
const usuario = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        telefono: telefono,
        delegacion: delegacion,
        direccion: direccion,
        codigoPostal: codigoPostal
    };

    // Enviar solicitud POST al servidor
    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (response.ok) {
            alert("Usuario registrado correctamente");
            document.querySelector("form").reset(); // Limpiar formulario
        } else {
            alert("Error al registrar el usuario");
        }
    })
    .catch(error => console.error("Error en la solicitud:", error));
});
