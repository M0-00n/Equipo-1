const dbfile="db.json"; //nombre del archivo de json que vamos a tener
if (!fs.existsSync(dbfile)){ //si no existe este file, vamos a crear otro
    fs.writeFileSync(dbfile,JSON.stringify({usuarios:[]},null,2),"utf8") //verificar si el archov json existe y si no, crearlo con una base
} 

document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Capturar valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const telefono = document.getElementById("telefono").value;
    const delegacion = document.getElementById("delegacion").value;
    const direccion = document.getElementById("direccion").value;
    const codigoPostal = document.getElementById("codigoPostal").value;

    // Crear objeto JSON
    const usuario = {
        nombre,
        apellido,
        correo,
        contrasena,
        telefono,
        delegacion,
        direccion,
        codigoPostal
    };

    // Enviar el objeto JSON a json-server
    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        alert("Usuario registrado correctamente");
        document.getElementById("registro-form").reset();
    })
    .catch(error => {
        console.error("Error al registrar el usuario:", error);
    });
});
