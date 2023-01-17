// Asignación del DOM a las variables
const password = document.getElementById("password");
const passwordValid = document.getElementById("password-valid");
const error = "Formato de contraseña inválido";
const caracteres = document.getElementById("tip1");
const mayuscula = document.getElementById("tip2");
const minuscula = document.getElementById("tip3");
const numero = document.getElementById("tip4");
const caracter = document.getElementById("tip5");

// Asignación de los iconos a las variables
const icono_correcto = "icono_correcto.png";
const icono_error = "icono_error.png";


// Evento que se dispara cuando el usuario escribe algo en el input de contraseña
password.addEventListener("input", function () {
  // Verifica la longitud de la contraseña (8-16) y si no contiene espacios en blanco
  if (
    this.value.length >= 8 && 
    this.value.length <= 16 && 
    (/^\S*$/.test(this.value)) 
  ) {
    caracteres.classList.remove("red");
    caracteres.classList.add("green");
    document.getElementById("tip1-icon").src = icono_correcto;
    document.getElementById("tip1-icon").classList.remove("hidden");
  } else {
    caracteres.classList.remove("green");
    caracteres.classList.add("red");
    document.getElementById("tip1-icon").src = icono_error;
    document.getElementById("tip1-icon").classList.remove("hidden");
    passwordValid.style.display = "block";
    passwordValid.classList.add("violet");
    passwordValid.innerHTML = error;
  }


  // Verifica si la contraseña contiene al menos una mayúscula
  if (/[A-Z]/.test(this.value)) {
    mayuscula.classList.remove("red");
    mayuscula.classList.add("green");
    document.getElementById("tip2-icon").src = icono_correcto;
    document.getElementById("tip2-icon").classList.remove("hidden");
  } else {
    mayuscula.classList.remove("green");
    mayuscula.classList.add("red");
    document.getElementById("tip2-icon").src = icono_error;
    document.getElementById("tip2-icon").classList.remove("hidden");
    passwordValid.style.display = "block";
    passwordValid.classList.add("red");
    passwordValid.innerHTML = error;
  }

  // Verifica si la contraseña contiene al menos una minúscula
  if (/[a-z]/.test(this.value)) {
    minuscula.classList.remove("red");
    minuscula.classList.add("green");
    document.getElementById("tip3-icon").src = icono_correcto;
    document.getElementById("tip3-icon").classList.remove("hidden");
  } else {
    minuscula.classList.remove("green");
    minuscula.classList.add("red");
    document.getElementById("tip3-icon").src = icono_error;
    document.getElementById("tip3-icon").classList.remove("hidden");
    passwordValid.style.display = "block";
    passwordValid.classList.add("red");
    passwordValid.innerHTML = error;
  }

  // Verifica si la contraseña contiene al menos un número
  if (/[0-9]/.test(this.value)) {
    numero.classList.remove("red");
    numero.classList.add("green");
    document.getElementById("tip4-icon").src = icono_correcto;
    document.getElementById("tip4-icon").classList.remove("hidden");
  } else {
    numero.classList.remove("green");
    numero.classList.add("red");
    document.getElementById("tip4-icon").src = icono_error;
    document.getElementById("tip4-icon").classList.remove("hidden");
    passwordValid.style.display = "block";
    passwordValid.classList.add("red");
    passwordValid.innerHTML = error;
  }

  // Verifica si la contraseña contiene al menos un caracter especial
  if (/[!@#$%^&*]/.test(this.value)) {
    caracter.classList.remove("red");
    caracter.classList.add("green");
    document.getElementById("tip5-icon").src = icono_correcto;
    document.getElementById("tip5-icon").classList.remove("hidden");
  } else {
    caracter.classList.remove("green");
    caracter.classList.add("red");
    document.getElementById("tip5-icon").src = icono_error;
    document.getElementById("tip5-icon").classList.remove("hidden");
    passwordValid.style.display = "block";
    passwordValid.classList.add("red");
    passwordValid.innerHTML = error;
  }

  
  // Verifica si todos los tips tienen la clase verde y muestra el mensaje de contraseña válida
  if (
    caracteres.classList.contains("green") &&
    mayuscula.classList.contains("green") &&
    minuscula.classList.contains("green") &&
    numero.classList.contains("green") &&
    caracter.classList.contains("green")
  ) {

    passwordValid.style.display = "none";
    passwordValid.classList.remove("violet");
    document.getElementById("tip1-icon").src = "";
    document.getElementById("tip2-icon").src = "";
    document.getElementById("tip3-icon").src = "";
    document.getElementById("tip4-icon").src = "";
    document.getElementById("tip5-icon").src = "";
    document.getElementById("tip0-icon").classList.remove("hidden");
    // password.src="icono_correcto.png"
  }
  else {
    document.getElementById("tip0-icon").classList.add("hidden"); // Oculta el icono de contraseña válida
  }
 
});
