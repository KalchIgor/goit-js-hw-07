import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galaryElem = galleryItems.map(({ preview, original,
    description }) => {`
    <div class="gallery__item">
     <a class="gallery__link"  href="${original}>
    <img
      class="gallery__image" 
      src="${ preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </div>`
    }).join('');

gallery.insertAdjacentHTML('beforeend', galleryElem);

function onClicImg(evn) {
    evt.preventDefault();
     if (evt.target.nodeName !== 'IMG') {
        return;
     }
        const modal = basicLightbox.create(
            `<img src="${evt.target.dataset.source}" width="800" height="600">`,
                    {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
}


 modal.show();

function onEscKeyPress(evt) {   
    const ESC_KEY_CODE = "Escape";
    const evt = evt.code === ESC_KEY_CODE;
        if (evt) {
            modal.close();
        }
    }