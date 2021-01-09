const thumbnails = document.querySelectorAll('img.thumbnail');
const carouselImages = document.querySelectorAll('.carousel-item');
const thumbnailFirst = document.querySelector('.thumbnail');
const thumbnailAll = document.querySelectorAll('.thumbnail');
const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');
const thumbnailLength = document.querySelectorAll('.thumbnail').length;
const imageCounter = document.querySelector('.image-counter');
const imagesLength = Number.parseInt(imageCounter.dataset.count, 10);
console.log(imagesLength);
let thumbnailCount = 0;


thumbnailFirst.classList.add('highlightOrange');
// console.log(carouselImageActive);

function updateImageCounter(count) {
  imageCounter.innerText = `image ${count + 1} of ${imagesLength}`;
}

const highlightOrange = (e) => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange');
  })
  const imageNumber = Number.parseInt(e.target.dataset.count);
  e.target.classList.add('highlightOrange');
  carouselImages.forEach((image) => {
    image.classList.remove('active');
  });
  carouselImages[`${imageNumber}`].classList.add('active');
  thumbnailCount = imageNumber;
  updateImageCounter(thumbnailCount);
};

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', highlightOrange);
});

const highlightThumbnailNext = () => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange')
  });
  if (thumbnailCount < (thumbnailLength - 1) ) {
    thumbnailAll[`${thumbnailCount + 1}`].classList.add('highlightOrange');
    thumbnailCount += 1;
  } else {
    thumbnailAll[0].classList.add('highlightOrange');
    thumbnailCount = 0;
  }
  updateImageCounter(thumbnailCount);
};

const highlightThumbnailPrev = () => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange')
  });
  if (thumbnailCount == 0) {
    thumbnailAll[`${thumbnailLength - 1}`].classList.add('highlightOrange');
    thumbnailCount = thumbnailLength - 1;
  } else {
    thumbnailAll[`${thumbnailCount - 1}`].classList.add('highlightOrange');
    thumbnailCount -= 1;
  }
  updateImageCounter(thumbnailCount);
};


nextButton.addEventListener('click', highlightThumbnailNext);
prevButton.addEventListener('click', highlightThumbnailPrev);
