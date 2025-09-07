const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const total = images.length;

// Tempo que cada imagem fica visível
const visibleTime = 3000; // 4 segundos

// Pega o tempo de transição do CSS
const style = window.getComputedStyle(carousel);
let transitionTime = style.transitionDuration; // ex: "1.5s"

// Converte para milissegundos
if (transitionTime.endsWith('s')) {
    transitionTime = parseFloat(transitionTime) * 1000;
} else {
    transitionTime = parseFloat(transitionTime);
}

let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % total;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Chama o próximo slide depois do tempo visível + transição
    setTimeout(showNextImage, visibleTime + transitionTime);
}

// inicia depois do tempo visível da primeira imagem
setTimeout(showNextImage, visibleTime);