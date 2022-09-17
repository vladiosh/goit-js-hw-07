import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", imageMarkup);
galleryContainerRef.addEventListener("click", onImageClick);

function createImageMarkup(items) {
  return items
    .map((item) => {
      return `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
  `;
    })
    .join("");
}

onOpenModal();

function onImageClick(evt) {
  evt.preventDefault();

  const isImageEl = evt.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }
  console.log(evt.target);
}

function onOpenModal(evt) {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  return lightbox;
}
