'use strict';

{
    const image      = document.querySelector('.gallery__image');
    const thumbnails = document.querySelectorAll('.gallery__thumbnail');

    for ( let thumbnail of thumbnails ) {

        thumbnail.addEventListener('click', e => {

            /* add active effect */
            for ( let thumbnail of thumbnails ) thumbnail.classList.remove('gallery__thumbnail_active');
            thumbnail.classList.add('gallery__thumbnail_active');

            /* change current image */
            image.src = e.target.src;


        });

    }
}