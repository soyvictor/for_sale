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

firstThumbnail.classList.add('highlightOrange');

function updateImageCounter(count) {
  carouselImageCounterHtml.innerText = `image ${count + 1} of ${carouselImagesLength}`;
}

const highlightOrange = (e) => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange');
  })
  const imageNumber = Number.parseInt(e.target.dataset.count);
  e.target.classList.add('highlightOrange');
  allCarouselImages.forEach((image) => {
    image.classList.remove('active');
  });
  allCarouselImages[`${imageNumber}`].classList.add('active');
  thumbnailCount = imageNumber;
  updateImageCounter(thumbnailCount);
};

allThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', highlightOrange);
});

const highlightThumbnailNext = () => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange')
  });
  if (thumbnailCount < (thumbnailsLength - 1) ) {
    allThumbnails[`${thumbnailCount + 1}`].classList.add('highlightOrange');
    thumbnailCount += 1;
  } else {
    allThumbnails[0].classList.add('highlightOrange');
    thumbnailCount = 0;
  }
  updateImageCounter(thumbnailCount);
};

const highlightThumbnailPrev = () => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange')
  });
  if (thumbnailCount == 0) {
    allThumbnails[`${thumbnailsLength - 1}`].classList.add('highlightOrange');
    thumbnailCount = thumbnailsLength - 1;
  } else {
    allThumbnails[`${thumbnailCount - 1}`].classList.add('highlightOrange');
    thumbnailCount -= 1;
  }
  updateImageCounter(thumbnailCount);
};


nextButton.addEventListener('click', highlightThumbnailNext);
prevButton.addEventListener('click', highlightThumbnailPrev);
