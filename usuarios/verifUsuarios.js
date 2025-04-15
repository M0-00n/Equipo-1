const login = async () => {
    const credentials = {
        email: document.getElementById("usuarioEmail").value,
        password: document.getElementById("usuarioContrasena").value
    };

    const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });

    const text = await response.text(); // ← importante: como es texto plano

    if (response.ok) {
        const user = JSON.parse(text);
        alert("Login exitoso. Bienvenido " + user.name);
        window.location.href = "index.html";
    } else if (response.status === 404) {
        alert("Correo no registrado. ¿Quieres registrarte?");
        // puedes redirigir o mostrar un botón también
        if (confirm("¿Deseas ir a la página de registro?")) {
            window.location.href = "signup.html";
        }
    } else if (response.status === 401) {
        alert("Contraseña incorrecta. Intenta nuevamente.");
    } else {
        alert("Error desconocido: " + text);
    }
};