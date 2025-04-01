document.getElementById('forminiciasesion').addEventListener('submit', async function (event) {
    
    event.preventDefault();

    const usuarioEmail = document.getElementById('usuarioEmail').value;
    const usuarioContrasena = document.getElementById('usuarioContrasena').value;

    try {
        //Peticion GEt para obtner los usuarios
        const respuesta= await fetch('http://localhost:3000/usuarios');
        const usuarios = await respuesta.json();

        //buscar si el usuario ya existe 
        const usuarioExistente = usuarios.find(u=> u.correo === usuarioEmail && u.contrasena === usuarioContrasena);

        if(usuarioExistente) {
            alert("Bienvenido!")
            window.location.href = 'index.html'
        } else {
            alert("Usuario no existene. \n Vamos a registrarte!")
            window.location.href = 'registrate.html'
        }

    } catch (error) {
        console.error("Error al conectar con la base de datos")
    }
});
