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

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})




