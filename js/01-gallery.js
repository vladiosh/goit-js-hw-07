import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", imageMarkup);

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

console.log(imageMarkup);
