// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery')

const galleryArrayEl = galleryItems.map(image => `<div class="gallery__item">
  <a class="gallery__item" href="${image.original}"">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</div>
`).join('');

galleryBoxEl.insertAdjacentHTML('afterbegin', galleryArrayEl)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
