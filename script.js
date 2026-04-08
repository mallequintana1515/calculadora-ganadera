
const animalEl = document.getElementById("animal");
const produccionEl = document.getElementById("produccion");
const cantidadEl = document.getElementById("cantidad");
const precioEl = document.getElementById("precio");
const respuestaEl = document.getElementById("respuesta");
const btnCantidad = document.getElementById("btnCantidad");
const btnProducto = document.getElementById("btnProducto");
const btnPrecio = document.getElementById("btnPrecio");
const btnCalcular = document.getElementById("btnCalcular");
const btnCopiarPrecio = document.getElementById("btnCopiarPrecio");
const btnLogin = document.getElementById("btnLogin");
const btnGlosario = document.getElementById("btnGlosario");
const glosarioModal = document.getElementById("glosarioModal");
const btnCerrarGlosario = document.getElementById("btnCerrarGlosario");
const buscadorGlosario = document.getElementById("buscadorGlosario");
const formContacto = document.getElementById("formContacto");
const mensajeContacto = document.getElementById("mensaje");
const botonesVista = document.querySelectorAll("[data-target]");
const vistas = document.querySelectorAll("[data-view]");

const mostrarVista = (vistaId, desplazar = false) => {
    vistas.forEach((vista) => {
        vista.hidden = vista.dataset.view !== vistaId;
    });

    botonesVista.forEach((boton) => {
        const activo = boton.dataset.target === vistaId;
        boton.classList.toggle("is-active", activo);
        boton.setAttribute("aria-pressed", String(activo));
    });

    const vistaActiva = desplazar ? document.querySelector(`[data-view="${vistaId}"]`) : null;
    if (vistaActiva) {
        vistaActiva.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

function tipoProduccion(animal) {
    if (animal === "Vaca") return "Leche 🥛";
    if (animal === "Cerdo") return "Carne 🍖";
    if (animal === "Pollo") return "Huevos 🥚";
    return "";
}

animalEl.addEventListener("change", () => {
    produccionEl.value = tipoProduccion(animalEl.value);
    cantidadEl.value = "";
    precioEl.value = "";
    cantidadEl.disabled = true;
    precioEl.disabled = true;
    precioEl.readOnly = true;
    respuestaEl.textContent = "";
});

btnCantidad.addEventListener("click", () => {
    if (!animalEl.value) return alert("Selecciona un animal primero.");
    cantidadEl.disabled = false;
    cantidadEl.readOnly = false;
    cantidadEl.focus();
});

btnProducto.addEventListener("click", () => {
    if (!animalEl.value) return alert("Selecciona un animal primero.");
    produccionEl.value = tipoProduccion(animalEl.value);
    respuestaEl.textContent = "Producto: " + produccionEl.value;
});

btnPrecio.addEventListener("click", () => {
    if (!animalEl.value) return alert("Selecciona un animal primero.");
    const cantidad = Number(cantidadEl.value);
    if (!(cantidad > 0)) return alert("Ingresa primero la cantidad producida.");
    precioEl.disabled = false;
    precioEl.readOnly = false;
    precioEl.focus();
});

btnCopiarPrecio.addEventListener("click", async () => {
    if (!precioEl.value) return alert("Ingresa el precio para copiar.");
    try {
        await navigator.clipboard.writeText(precioEl.value);
        respuestaEl.textContent = `Precio copiado: ${precioEl.value}`;
    } catch {
        alert("No se pudo copiar al portapapeles.");
    }
});

const loginModal = document.getElementById("loginModal");
const loginUsuario = document.getElementById("loginUsuario");
const loginContrasena = document.getElementById("loginContrasena");
const loginMensaje = document.getElementById("loginMensaje");
const btnEnviarLogin = document.getElementById("btnEnviarLogin");
const btnCerrarLogin = document.getElementById("btnCerrarLogin");

const abrirModalLogin = () => {
    if (glosarioModal && glosarioModal.getAttribute("aria-hidden") === "false") {
        cerrarGlosario();
    }

    loginModal.style.display = "flex";
    loginModal.setAttribute("aria-hidden", "false");
    loginMensaje.textContent = "";
    loginUsuario.value = "";
    loginContrasena.value = "";
    loginUsuario.focus();
};

const cerrarModalLogin = () => {
    loginModal.style.display = "none";
    loginModal.setAttribute("aria-hidden", "true");
    loginMensaje.textContent = "";
};

btnLogin.addEventListener("click", abrirModalLogin);
btnCerrarLogin.addEventListener("click", cerrarModalLogin);

loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) cerrarModalLogin();
});

btnEnviarLogin.addEventListener("click", () => {
    const usuario = loginUsuario.value.trim();
    const contrasena = loginContrasena.value.trim();

    if (!usuario) {
        loginMensaje.textContent = "Ingresa un usuario.";
        loginUsuario.focus();
        return;
    }
    if (!contrasena) {
        loginMensaje.textContent = "Ingresa una contraseña.";
        loginContrasena.focus();
        return;
    }

    if (usuario === "admin" && contrasena === "1234") {
        loginMensaje.style.color = "#1b5e20";
        loginMensaje.textContent = `Bienvenido ${usuario}, has iniciado sesión correctamente.`;
        setTimeout(() => {
            cerrarModalLogin();
            mostrarVista("calculadora");
        }, 800);
    } else {
        loginMensaje.style.color = "#d32f2f";
        loginMensaje.textContent = "Usuario o contraseña incorrectos.";
    }
});

const abrirGlosario = () => {
    if (!glosarioModal) return;

    if (loginModal && loginModal.getAttribute("aria-hidden") === "false") {
        cerrarModalLogin();
    }

    glosarioModal.style.display = "flex";
    glosarioModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-abierto");
    btnGlosario.textContent = "Cerrar glosario";
    btnGlosario.setAttribute("aria-expanded", "true");

    if (buscadorGlosario) {
        buscadorGlosario.value = "";
        filtrarGlosario();
        buscadorGlosario.focus();
    }
};

const cerrarGlosario = () => {
    if (!glosarioModal) return;

    glosarioModal.style.display = "none";
    glosarioModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-abierto");
    btnGlosario.textContent = "Glosario";
    btnGlosario.setAttribute("aria-expanded", "false");

    if (buscadorGlosario) {
        buscadorGlosario.value = "";
        filtrarGlosario();
    }
};

if (btnGlosario && glosarioModal) {
    btnGlosario.addEventListener("click", () => {
        const estaAbierto = glosarioModal.getAttribute("aria-hidden") === "false";
        if (estaAbierto) {
            cerrarGlosario();
        } else {
            abrirGlosario();
        }
    });
}

if (btnCerrarGlosario) {
    btnCerrarGlosario.addEventListener("click", cerrarGlosario);
}

if (glosarioModal) {
    glosarioModal.addEventListener("click", (e) => {
        if (e.target === glosarioModal) cerrarGlosario();
    });
}

document.addEventListener("keydown", (e) => {
    const glosarioAbierto = glosarioModal && glosarioModal.getAttribute("aria-hidden") === "false";
    if (e.key === "Escape" && glosarioAbierto) {
        cerrarGlosario();
    }
});

if (buscadorGlosario) {
    buscadorGlosario.addEventListener("input", filtrarGlosario);
}

if (formContacto) {
    formContacto.addEventListener("submit", mostrarDatos);
}

botonesVista.forEach((boton) => {
    boton.addEventListener("click", () => {
        mostrarVista(boton.dataset.target, true);
    });
});

mostrarVista("calculadora");

btnCalcular.addEventListener("click", () => {
    const cantidad = Number(cantidadEl.value);
    const precio = Number(precioEl.value);

    if (!animalEl.value) return alert("Selecciona animal.");
    if (!produccionEl.value) return alert("Presiona botón 3 primero.");
    if (!(cantidad > 0)) return alert("Ingresa una cantidad válida.");
    if (!(precio > 0)) return alert("Ingresa un precio válido.");

    const total = cantidad * precio;
    respuestaEl.textContent =
        `Animal: ${animalEl.value} | Producto: ${produccionEl.value} | Cantidad: ${cantidad} | Precio/u: ${precio.toFixed(2)} | Total: ${total.toFixed(2)}`;
});

function filtrarGlosario() {
    const termino = buscadorGlosario ? buscadorGlosario.value.toLowerCase().trim() : "";
    const items = document.querySelectorAll("#listaGlosario li");

    items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        item.style.display = texto.includes(termino) ? "" : "none";
    });
}

function mostrarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();

    mensajeContacto.textContent = `Gracias ${nombre}. Recibimos tu contacto: ${telefono} / ${correo}. Te responderemos pronto.`;
    mensajeContacto.style.color = "#1b5e20";

    event.target.reset();
    document.getElementById("nombre").focus();
}
