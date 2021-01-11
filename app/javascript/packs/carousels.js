const allCarousels =  document.querySelectorAll('.item-box');

function DISPLAYIMAGECOUNT(itemBox) {
  let counter = 1;
  const carouselImageCounterHtml = itemBox.querySelector('.image-counter');
  const carouselImagesLength = Number.parseInt(carouselImageCounterHtml.dataset.count, 10);
  const nextButton = itemBox.querySelector('.carousel-control-next');
  console.log(nextButton);
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


// const allImages = document.querySelectorAll('.carousel-img')

//   allImages.forEach((image) => {
//     image.addEventListener('mouseover', (e) => {
//       console.log(e.target);
//       // e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.display-image-count').classList.add('appears');
//     });
//   });

//   allImages.forEach((image) => {
//     image.addEventListener('mouseover', (e) => {
//       e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.display-image-count').classList.remove('appears');
//     });
//   });


// will comment out this code below...starting afresh.

// const itemsImageCount = document.querySelectorAll('.carousel-img');

// itemsImageCount.forEach((item) => {
//   item.addEventListener('mouseover', (e) => {
//     e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.display-image-count').classList.add('appears');
//   });
// });

// itemsImageCount.forEach((item) => {
//   item.addEventListener('mouseout', (e) => {
//     e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.display-image-count').classList.remove('appears');
//   });
// });

// itemsImageCount.forEach((item) => {
//   item.addEventListener('mouseover', (e) => {
//     console.log(e);
//     e.currentTarget.nextElementSibling.classList.add('appears');
//   });
// });

// itemsImageCount.forEach((item) => {
//   item.addEventListener('mouseout', (e) => {
//     e.currentTarget.nextElementSibling.classList.remove('appears');
//   });
// });
