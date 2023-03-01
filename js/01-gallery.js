import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');

//1
gallery.innerHTML = galleryItems.map(({ preview, original, description }) => 
        `<div class='gallery__item'>
           <a class='gallery__link' href='${original}'>
             <img class='gallery__image' src='${preview}' data-sourse='${original}' alt='${description}'/>
           </a>
         </div>`
    ).join('');

gallery.addEventListener('click', onImgCardClick);

//2
function onImgCardClick(e) {
    e.preventDefault()
    
    if (!e.target.dataset.sourse)
        return
    console.log(e.target);

const instance = basicLightbox.create(`
    <img src="${e.target.dataset.sourse}" width="800" height="600" />`,
    {
        onShow: () => document.addEventListener('keydown', onCloseModal),
        onClose: () => document.removeEventListener('keydown', onCloseModal),
    }
);
    instance.show()
}

function onCloseModal(e) {
    if (e.code === 'Escape') {
        instance.close();
    }
}