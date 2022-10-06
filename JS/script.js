// GALERIA MODAL
// Variáveis
const galleryModal = document.querySelector(".gallery-modal");
const galleryModalX = document.querySelector(".gallery-modal span");
const galleryModalImg = document.querySelector(".gallery-modal img");
const img = document.querySelectorAll(".gallery-image img");

// Abrir Modal
img.forEach((item) => {
  item.addEventListener("click", () => {
    galleryModal.style.visibility = "visible";
    galleryModalImg.style.transform = "scale(1)";
    galleryModalImg.src = item.src;
  });
});

// Fechar Modal
galleryModalX.addEventListener("click", () => {
  galleryModal.style.visibility = "hidden";
  galleryModalImg.style.transform = "scale(0)";
});
