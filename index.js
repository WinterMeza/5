window.onload = () => {
    document.body.addEventListener("keyup", e => listenForEsc(e));
    document.querySelector(".arrow-right").addEventListener("click", clickRight);
    document.querySelector(".arrow-left").addEventListener("click", clickLeft);
    document
        .querySelector(".send-button")
        .addEventListener("click", e => validateForm(e));
    document.querySelectorAll(".project").forEach(element => {
        element.addEventListener("click", e => openModal(e));
    });
    document.body.addEventListener("click", e => closeModal(e));
};

/** Permite dar click en la flecha derecha del carousel para navegar a la derecha */
function clickRight() {

    switch (newValue) {
        case -270:
            document.querySelector('.project1 project').setAttribute("tabindex", "-1");
            document.querySelector('.project1-container').setAttribute("aria-hidden", "true");
            document.querySelector('.project4 project').removeAttribute("tabindex");
            document.querySelector('.project4-container').removeAttribute("aria-hidden");
            break;
        case -540:
            document.querySelector('.project2 project').setAttribute("tabindex", "-1");
            document.querySelector('.project2-container').setAttribute("aria-hidden", "true");
            document.querySelector('.project5 project').removeAttribute("tabindex");
            document.querySelector('.project5-container').removeAttribute("aria-hidden");
            break;
        default:
            break;
    }
}

function clickRight() {

    const currentLeft = parseInt(
        getComputedStyle(document.querySelector(".project-container")).left,
        10
    );
    if (currentLeft < -270) { // Condición:Si el valor de izquierda es menor a -270, para de mover el contenido.
        return;
    }
    let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margines.
    document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** Esta funcion se llama cuando la persona hace click en la flecha izquierda del carousel para navegar a la izquierda */

function clickLeft() {

    switch (newValue) {
        case -270:
            document.querySelector('.project5 project').setAttribute("tabindex", "-1");
            document.querySelector('.project5-container').setAttribute("aria-hidden", "true");
            document.querySelector('.project2 project').removeAttribute("tabindex");
            document.querySelector('.project2-container').removeAttribute("aria-hidden");
            break;
        case 0:
            document.querySelector('.project4 project').setAttribute("tabindex", "-1");
            document.querySelector('.project4-container').setAttribute("aria-hidden", "true");
            document.querySelector('.project1 project').removeAttribute("tabindex");
            document.querySelector('project1-container').removeAttribute("aria-hidden");
            break;
        default:
            break;
    }
}

function clickLeft() {
    const currentLeft = parseInt(
        getComputedStyle(document.querySelector(".project-container")).left,
        10
    );
    if (currentLeft === 0) { //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
        return;
    }
    let newValue = currentLeft + 270;
    document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
    document.getElementById("name-error").innerHTML = "";
    document.querySelector('.form-container').reset();
    document.querySelector(".notification").innerHTML = "El formulario fue enviado sin errores";
    document.querySelector(".notification").style.display = "flex";
    setTimeout(function () {
        document.querySelector(".notification").style.display = "none";
    }, 3000);
}

/** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
function openModal(e) {
    document.querySelector(".modal-container").style.display = "flex";
    document.getElementById('modal-header').focus();
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
    // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
    if (
        e.target.className.includes("project") ||
        e.target.className === "modal"
    ) {
        return;
    } else {
        document.querySelector(".modal-container").style.display = "none";
    }
}
/*Escucha por la clave esc para cerrar el modal */
function listenForEsc(e) {
    if (e.keyCode === 27) {
        closeModal(e)
    }
}
/** Función para validar el formulario antes de mostrar la Notificacion*/
function validateForm(e) {
    e.preventDefault();
    const nameField = document.getElementById("name");
    if (nameField.value === "") {
        document.getElementById("name-error").innerHTML = "¡ Para enviar el formulario, se necesita llenar los datos ! ";
    } else {
        showNotification();
    }
}
const imagenes = document.querySelectorAll('.project-img')
const imagenLight = document.querySelector('.modal-project-image');
const contenedorLight = document.querySelector('.imagen-carrusel')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
});
contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenLight) {
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})
const aparecerImagen = (imagen) => {
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
}