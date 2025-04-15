document.getElementById("formRegistroUsuario").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("nombre").value.trim();
  const lastname = document.getElementById("apellido").value.trim();
  const email = document.getElementById("correo").value.trim();
  const password = document.getElementById("contrasena").value;
  const confirmar = document.getElementById("contrasenaConfirmar").value;
  const phone = document.getElementById("telefono").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Limpiar mensaje anterior
  errorMsg.textContent = "";

  // Validar campos vacíos
  if (!name || !lastname || !email || !password || !confirmar || !phone) {
      errorMsg.textContent = "Todos los campos son obligatorios.";
      return;
  }

  // Validar nombre y apellido (solo letras)
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!nameRegex.test(name) || !nameRegex.test(lastname)) {
      errorMsg.textContent = "Nombre y apellido solo deben contener letras.";
      return;
  }

  // Validar email con dominio permitido
  const emailRegex = /^[\w.-]+@[\w.-]+\.(com|net|org|edu|gob)$/i;
  if (!emailRegex.test(email)) {
      errorMsg.textContent = "Correo no válido o dominio no permitido.";
      return;
  }

  // Validar contraseña mínima de 6 caracteres
  if (password.length < 6) {
      errorMsg.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmar) {
      errorMsg.textContent = "Las contraseñas no coinciden.";
      return;
  }

  // Validar teléfono (solo números y mínimo 10 dígitos)
  const phoneRegex = /^\d{10,}$/;
  if (!phoneRegex.test(phone)) {
      errorMsg.textContent = "El teléfono debe tener al menos 10 dígitos y solo números.";
      return;
  }

  // Si todo está bien, continúa con el fetch para registrar al usuario
  const user = { name, lastname, email, password, phoneNumber: phone };

  try {
      const response = await fetch("http://localhost:8080/users/sign-up", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
      });

      if (response.status === 201) {
          alert("Usuario registrado con éxito.");
          window.location.href = "login.html";
      } else if (response.status === 409) {
          errorMsg.textContent = "Este correo ya está registrado.";
      } else {
          errorMsg.textContent = "Error al registrar el usuario.";
      }
  } catch (error) {
      errorMsg.textContent = "Error de conexión con el servidor.";
  }
});

