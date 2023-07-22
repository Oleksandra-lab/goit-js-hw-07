import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup)

function createGalleryMarkup(galleryItems){
    return galleryItems
    .map(
        ({original, preview, description}) => 
        `<li><a href=""><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
        )
    .join("")

}


console.log(galleryItems);
