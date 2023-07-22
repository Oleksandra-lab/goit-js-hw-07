import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryMarkup(galleryItems){
    return galleryItems
    .map(
        ({original, preview, description}) => 
        `<li><a href=""><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
        )
    .join("")

}

galleryContainer.addEventListener("click", onImageClick);
function onImageClick(evt){
    evt.preventDefault();
    if(evt.target.nodeName !== "IMG"){
        return
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show();

    galleryContainer.addEventListener("keydown", (evt) => {
        if(evt.code === "Escape"){
            instance.close();
        }
    })

}





console.log(galleryItems);
