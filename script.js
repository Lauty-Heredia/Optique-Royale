const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

function adjustQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = isNaN(currentQuantity) ? 1 : currentQuantity + change;
    quantityInput.value = Math.max(currentQuantity, 1); 
}

function changeImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;
}
