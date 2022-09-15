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
  <div class="gallery__item">
     <a class="gallery__link" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
     </a>
  </div>
  `;
    })
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  const isImageEl = evt.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }
  console.log(evt.target);

  const galleryOriginalImage = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${galleryOriginalImage}" width="800" height="600">`
  );

  instance.show();
}
