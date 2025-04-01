// Constantes
const API_URL = "http://localhost:3000/usuarios";
const FORMULARIO = document.getElementById("formRegistroUsuario");

// Objeto con mensajes de error
const ERRORES = {
  nombre: "El nombre debe tener al menos 5 letras y sin números",
  apellido: "El apellido debe tener al menos 5 letras y sin números",
  correo: "Ingresa un correo electrónico válido",
  contrasena: "La contraseña debe tener entre 5-15 caracteres",
  contrasenaConfirmar: "Las contraseñas no coinciden",
  telefono: "El teléfono debe tener 10 dígitos numéricos",
  codigopostal: "El código postal debe tener 5 dígitos",
  delegacion: "Selecciona una delegación válida",
  terminos: "Debes aceptar los términos y condiciones"
};

// FUNCIONES DE VALIDACION //

function validarTexto(id, minLength) {
    const campo = document.getElementById(id);
    const valor = campo.value.trim();
    
    if (valor === "") {
      mostrarError(campo, "Este campo es requerido");
      return false;
    }
    
    // Cambia el 5 por 3 ↓
    if (valor.length < 3 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor)) {
      mostrarError(campo, `Debe tener al menos 3 letras y sin números`); // Mensaje actualizado
      return false;
    }
    
    return true;
  }

  function validarEmail() {
    const campo = document.getElementById("correo");
    const valor = campo.value.trim();
    const dominiosPermitidos = ['com', 'net', 'org', 'edu', 'gob']; // Agrega otros si necesitas
    
    if (valor === "") {
      mostrarError(campo, "El correo es obligatorio");
      return false;
    }
  
    // Expresión regular mejorada (solo dominios permitidos)
    const regexCorreo = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gob)$/i;
    
    if (!regexCorreo.test(valor)) {
      mostrarError(campo, "Solo aceptamos correos con dominios .com, .net, .org, .edu o .gob");
      return false;
    }
  
    return true;
  }

function validarContrasenas() {
  const pass1 = document.getElementById("contrasena");
  const pass2 = document.getElementById("contrasenaConfirmar");
  let esValido = true;

  if (pass1.value === "") {
    mostrarError(pass1, "Este campo es requerido");
    esValido = false;
  } else if (pass1.value.length < 5 || pass1.value.length > 15) {
    mostrarError(pass1, ERRORES.contrasena);
    esValido = false;
  }

  if (pass2.value === "") {
    mostrarError(pass2, "Confirma tu contraseña");
    esValido = false;
  } else if (pass1.value !== pass2.value) {
    mostrarError(pass2, ERRORES.contrasenaConfirmar);
    esValido = false;
  }

  return esValido;
}

function validarNumerico(id, longitud) {
  const campo = document.getElementById(id);
  const valor = campo.value.trim();
  
  if (valor === "") {
    mostrarError(campo, "Este campo es requerido");
    return false;
  }
  
  if (!new RegExp(`^\\d{${longitud}}$`).test(valor)) {
    mostrarError(campo, ERRORES[id]);
    return false;
  }
  
  return true;
}

function validarDelegacion() {
  const campo = document.getElementById("delegacion");
  if (campo.value === "Seleccione una opción...") {
    mostrarError(campo, ERRORES.delegacion);
    return false;
  }
  return true;
}

function validarDireccion() {
    const campo = document.getElementById("direccion");
    const valor = campo.value.trim();
    
    if (valor === "") {
      mostrarError(campo, "La dirección es obligatoria");
      return false;
    }
    
    if (valor.length < 10 || !/^[a-zA-Z0-9\s#.,-]+$/.test(valor)) {
      mostrarError(campo, "Usa un formato válido: Calle, número, colonia (mín. 10 caracteres)");
      return false;
    }
    
    return true;
  }

function validarTerminos() {
  const campo = document.getElementById("gridCheck");
  if (!campo.checked) {
    mostrarError(campo, ERRORES.terminos);
    return false;
  }
  return true;
}

// ==================== FUNCIONES AUXILIARES ====================

function mostrarError(campo, mensaje) {
  // Limpiar error previo si existe
  const errorExistente = campo.parentNode.querySelector(".error");
  if (errorExistente) errorExistente.remove();

  // Agregar clases de error
  campo.classList.add("is-invalid");
  
  // Crear elemento de error
  const errorDiv = document.createElement("div");
  errorDiv.className = "error invalid-feedback";
  errorDiv.textContent = mensaje;
  
  // Insertar después del campo (manejar casos especiales)
  if (campo.id === "gridCheck") {
    campo.parentNode.parentNode.appendChild(errorDiv);
  } else {
    campo.parentNode.appendChild(errorDiv);
  }
}

function limpiarErrores() {
  // Remover clases de error
  document.querySelectorAll(".is-invalid").forEach(campo => {
    campo.classList.remove("is-invalid");
  });
  
  // Eliminar mensajes de error
  document.querySelectorAll(".error").forEach(error => {
    error.remove();
  });
}

function mostrarAlerta(tipo, mensaje) {
  // Eliminar alertas previas
  const alertaExistente = document.querySelector('.alert');
  if (alertaExistente) alertaExistente.remove();

  // Crear nueva alerta
  const alerta = document.createElement('div');
  alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
  alerta.innerHTML = `
    ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  // Insertar antes del formulario
  FORMULARIO.parentNode.insertBefore(alerta, FORMULARIO);
  
  // Auto-eliminar después de 5 segundos
  setTimeout(() => alerta.remove(), 5000);
}

// ==================== LÓGICA PRINCIPAL ====================

async function enviarDatos(usuario) {
  try {
    // Verificar si el correo ya existe
    const response = await fetch(API_URL);
    const usuarios = await response.json();
    
    if (usuarios.some(u => u.correo === usuario.correo)) {
      mostrarError(document.getElementById("correo"), "Este correo ya está registrado");
      throw new Error("Correo ya registrado");
    }
    
    // Asignar ID (auto-incremental)
    usuario.id = usuarios.length > 0 
      ? Math.max(...usuarios.map(u => parseInt(u.id))) + 1 
      : 1;
    
    // Enviar datos al servidor
    const postResponse = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });
    
    if (!postResponse.ok) throw new Error("Error en el servidor");
    
    mostrarAlerta("success", "¡Registro exitoso!");
    FORMULARIO.reset();
  } catch (error) {
    console.error("Error:", error);
    mostrarAlerta("danger", error.message || "Error al registrar");
  }
}

// Evento principal del formulario
FORMULARIO.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Validando formulario..."); // Para depuración
  limpiarErrores();
  
  // Validar todos los campos
  const esValido = (
    validarTexto("nombre", 5) &&
    validarTexto("apellido", 5) &&
    validarEmail() &&
    validarContrasenas() &&
    validarNumerico("telefono", 10) &&
    validarNumerico("codigopostal", 5) &&
    validarDelegacion() &&
    validarDireccion() && // ← Nueva validación
    validarTerminos()
  );
  
  if (esValido) {
    console.log("Formulario válido, preparando datos...");
    const usuario = {
      nombre: document.getElementById("nombre").value.trim(),
      apellido: document.getElementById("apellido").value.trim(),
      correo: document.getElementById("correo").value.trim().toLowerCase(),
      contraseña: document.getElementById("contrasena").value,
      telefono: document.getElementById("telefono").value.trim(),
      delegacion: document.getElementById("delegacion").value,
      direccion: document.getElementById("direccion").value.trim(),
      codigoPostal: document.getElementById("codigopostal").value.trim()
    };
    
    await enviarDatos(usuario);
  } else {
    console.log("Formulario inválido, mostrando errores...");
    mostrarAlerta("danger", "Por favor corrige los errores en el formulario");
  }
});

// Validación en tiempo real para confirmar contraseña
document.getElementById("contrasenaConfirmar").addEventListener("input", function() {
  const pass1 = document.getElementById("contrasena").value;
  const pass2 = this.value;
  
  if (pass2 === "") {
    this.classList.remove("is-invalid", "is-valid");
    const error = this.parentNode.querySelector(".error");
    if (error) error.remove();
  } else if (pass1 !== pass2) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    const error = this.parentNode.querySelector(".error");
    if (!error) {
      mostrarError(this, ERRORES.contrasenaConfirmar);
    }
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
    const error = this.parentNode.querySelector(".error");
    if (error) error.remove();
  }
});