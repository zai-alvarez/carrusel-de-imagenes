'use strict';
// Obtener los elementos del HTMLque necesito
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");

/*Para llevar un registro de la imagen actual que se está mostrando.*/
let imageIndex = 1;

/*para detener y reiniciar la presentación de diapositivas automática*/
let intervalId;

// Función para iniciar el deslizador de imágenes automático
const autoSlide = () => {

    intervalId = setInterval(
        () => slideImage(++imageIndex), 3000);
    // Iniciar la presentación de diapositivas llamando a slideImage() cada 4 segundos
};

// Llamar a la función autoSlide al cargar la página
autoSlide();

//Función que actualiza la visualización del carrusel para mostrar la imagen especificada
const slideImage = () => {
    // Calcular el índice de imagen actualizada
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Actualizar la visualización del carrusel para mostrar la imagen especificada
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

//Función que actualiza la visualización del carrusel para mostrar la imagen siguiente o anterior
const updateClick = (e) => {
    // Detener la presentación de diapositivas automática
    clearInterval(intervalId);
    // Calcular el índice de imagen actualizado en función del botón pulsado
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Reiniciar la presentación de diapositivas automática
    autoSlide();
};


// Función manejadora
buttons.forEach((button) => button.addEventListener("click", updateClick));

//Para detener la presentación de diapositivas automática
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Para reiniciar la presentación de diapositivas automática
wrapper.addEventListener("mouseleave", autoSlide);