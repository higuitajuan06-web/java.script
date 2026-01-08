const traducciones = {
  es: {
    productos: [
      { titulo: "BBQ Crunch", descripcion: "1 Sandwich BBQ Crunch (1 Filete de pollo apanado)", boton: "Comprar" },
      { titulo: "Kentucky Sandwich", descripcion: "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,...)", boton: "Comprar" },
      { titulo: "Combo BBQ Crunch", descripcion: "1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET ...", boton: "Comprar" },
      { titulo: "Kentucky Coronel Sandwich", descripcion: "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)", boton: "Comprar" },
      { titulo: "Combo Kentucky Sandwich", descripcion: "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,...)", boton: "Comprar" },
      { titulo: "Combo Kentucky Coronel Sandwich", descripcion: "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)", boton: "Comprar" },
      { titulo: "Sandwich Crispy BBQ", descripcion: "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)", boton: "Comprar" },
      { titulo: "Combo Sandwich Crispy BBQ", descripcion: "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)", boton: "Comprar" }
    ]
  },

  en: {
    productos: [
      { titulo: "BBQ Crunch", descripcion: "1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)", boton: "Buy" },
      { titulo: "Kentucky Sandwich", descripcion: "1 Kentucky Burger / Sandwich (1 Breaded Chicken Breast Fillet, pickles, ...)", boton: "Buy" },
      { titulo: "BBQ Crunch Combo", descripcion: "1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Fries + 1 PET Soda ...", boton: "Buy" },
      { titulo: "Kentucky Colonel Sandwich", descripcion: "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, salad...)", boton: "Buy" },
      { titulo: "Kentucky Sandwich Combo", descripcion: "1 Kentucky Burger / Sandwich (1 Breaded Chicken Breast Fillet, pickles, ...)", boton: "Buy" },
      { titulo: "Kentucky Colonel Sandwich Combo", descripcion: "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, salad...)", boton: "Buy" },
      { titulo: "Crispy BBQ Sandwich", descripcion: "1 Crispy BBQ Sandwich (1 Extra Large Chicken Breast Fillet, triple breaded, crispy onion...)", boton: "Buy" },
      { titulo: "Crispy BBQ Sandwich Combo", descripcion: "1 Crispy BBQ Sandwich (1 Extra Large Chicken Breast Fillet, triple breaded, crispy onion...)", boton: "Buy" }
    ]
  }
};

// ================= IDIOMA =================
function cambiarIdioma() {
  const idioma = document.getElementById("select_idioma").value;
  localStorage.setItem("idiomaPreferido", idioma);

  document.querySelectorAll("[data-key]").forEach(el => {
    const [index, campo] = el.dataset.key.split(".");
    const texto = traducciones[idioma]?.productos[index]?.[campo];
    if (texto) el.textContent = texto;
  });
}

// ================= TEMA =================
function actualizarTheme() {
  const tema = document.getElementById("select_theme").value;
  const body = document.body;

  localStorage.setItem("temaPreferido", tema);

  body.classList.toggle("oscuro", tema === "dark");
}

// ================= CARGA INICIAL =================
window.onload = () => {
  // Idioma
  const idiomaGuardado = localStorage.getItem("idiomaPreferido");
  if (idiomaGuardado) {
    document.getElementById("select_idioma").value = idiomaGuardado;
    cambiarIdioma();
  }

  // Tema
  const temaGuardado = localStorage.getItem("temaPreferido");
  if (temaGuardado) {
    document.getElementById("select_theme").value = temaGuardado;
    document.body.classList.toggle("oscuro", temaGuardado === "dark");
  }
};


// =================== Cerrar sesion de el index ==================
function cerrarSesion() {
  Swal.fire({
    title: "¿Cerrar sesión?",
    text: "Tendrás que iniciar sesión nuevamente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e4002b",
    cancelButtonColor: "#aaa",
    confirmButtonText: "Sí, salir"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("logueado");
      window.location.href = "inicio.html";
    }
  });
}

// =================== Segurida a la hora de el URL ================
  if (localStorage.getItem("logueado") !== "true") {
    Swal.fire({
      icon: "warning",
      title: "Acceso restringido",
      text: "Debes iniciar sesión primero",
      confirmButtonColor: "#e4002b"
    }).then(() => {
      window.location.href = "inicio.html";
    });
  }

