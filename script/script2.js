const form = document.querySelector(".form");

const EMAIL_CORRECTO = "admin@kfc.com";
const PASSWORD_CORRECTA = "123456";

// Si ya está logueado, ir directo al index
if (localStorage.getItem("logueado") === "true") {
  window.location.href = "index.html";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === EMAIL_CORRECTO && password === PASSWORD_CORRECTA) {

    // Guardamos sesión
    localStorage.setItem("logueado", "true");

    Swal.fire({
      icon: "success",
      title: "¡Login exitoso!",
      text: "Bienvenido a KFC 🍗",
      confirmButtonColor: "#e4002b",
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "index.html";
    });

  } else {

    Swal.fire({
      icon: "error",
      title: "Error de autenticación",
      text: "Correo o contraseña incorrectos",
      confirmButtonColor: "#e4002b"
    });

  }
});
