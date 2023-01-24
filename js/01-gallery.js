import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galaryElem = galleryItems
    .map(
        (item) =>
            `<div class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a></div>`
    )
    .join("");
gallery.innerHTML = galaryElem;

let modalCreate;

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const modal = document.createElement("div");
    const newPic = document.createElement("img");
    newPic.src = e.target.getAttribute("data-source");
    modal.append(newPic);

    modalCreate = basicLightbox.create(modal);
    
    modalCreate.show();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalCreate.close();
    }
});


