const thumbnails = document.querySelectorAll('img.thumbnail');
const allCarouselImages = document.querySelectorAll('.carousel-item');
const firstThumbnail = document.querySelector('.thumbnail');
const allThumbnails = document.querySelectorAll('.thumbnail');
const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');
const thumbnailsLength = document.querySelectorAll('.thumbnail').length;
const carouselImageCounterHtml = document.querySelector('.carousel-image-counter');
const carouselImagesLength = Number.parseInt(carouselImageCounterHtml.dataset.count, 10);
let thumbnailCount = 0;

function updateCarouselImageCounter(count) {
  carouselImageCounterHtml.innerText = `image ${count + 1} of ${carouselImagesLength}`;
}

function removeOrangeHightlight() {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange');
  });
}

const highlightOrange = (e) => {
  removeOrangeHightlight();
  const imageNumber = Number.parseInt(e.target.dataset.count);
  e.target.classList.add('highlightOrange');
  allCarouselImages.forEach((image) => {
    image.classList.remove('active');
  });
  allCarouselImages[`${imageNumber}`].classList.add('active');
  thumbnailCount = imageNumber;
  updateCarouselImageCounter(thumbnailCount);
};

const highlightThumbnailNext = () => {
  removeOrangeHightlight();
  if (thumbnailCount < (thumbnailsLength - 1) ) {
    allThumbnails[`${thumbnailCount + 1}`].classList.add('highlightOrange');
    thumbnailCount += 1;
  } else {
    allThumbnails[0].classList.add('highlightOrange');
    thumbnailCount = 0;
  }
  updateCarouselImageCounter(thumbnailCount);
};

const highlightThumbnailPrev = () => {
  removeOrangeHightlight();
  if (thumbnailCount == 0) {
    allThumbnails[`${thumbnailsLength - 1}`].classList.add('highlightOrange');
    thumbnailCount = thumbnailsLength - 1;
  } else {
    allThumbnails[`${thumbnailCount - 1}`].classList.add('highlightOrange');
    thumbnailCount -= 1;
  }
  updateCarouselImageCounter(thumbnailCount);
};

// Event Listeners
allThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', highlightOrange);
});
nextButton.addEventListener('click', highlightThumbnailNext);
prevButton.addEventListener('click', highlightThumbnailPrev);

// Start of page

firstThumbnail.classList.add('highlightOrange');
