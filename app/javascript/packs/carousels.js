const allCarousels =  document.querySelectorAll('.item-box');

function DISPLAYIMAGECOUNT(itemBox) {
  const carouselImageCounterHtml = itemBox.querySelector('.image-counter');
  if (!carouselImageCounterHtml) {
    return;
  }
  let counter = 1;
  const carouselImagesLength = Number.parseInt(carouselImageCounterHtml.dataset.count, 10);
  const nextButton = itemBox.querySelector('.carousel-control-next');
  const prevButton = itemBox.querySelector('.carousel-control-prev');

  itemBox.addEventListener('mouseover', (e) => {
    const imageCounter = e.currentTarget.querySelector('.display-image-count');
    imageCounter.classList.add('appears');
  })

    itemBox.addEventListener('mouseout', (e) => {
    const imageCounter = e.currentTarget.querySelector('.display-image-count');
    imageCounter.classList.remove('appears');
  })

  function updateCarouselImageCounter(direction = 'plus') {
    console.log('this is working');
    if (direction == 'plus') {
      if (counter === carouselImagesLength) {
        counter = 1;
      } else {
        counter += 1;
      }
      carouselImageCounterHtml.innerText = `image ${counter} of ${carouselImagesLength}`;
    } else {
      if (counter === 1) {
        counter = carouselImagesLength;
      } else {
        counter -= 1;
      }
      carouselImageCounterHtml.innerText = `image ${counter} of ${carouselImagesLength}`;
    }
  }

  //event listeners
  nextButton.addEventListener('click', () => updateCarouselImageCounter('plus'));
  prevButton.addEventListener('click', () => updateCarouselImageCounter('minus'));
}

allCarousels.forEach((carousel) => {
  DISPLAYIMAGECOUNT(carousel);
})
