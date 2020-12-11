const thumbnails = document.querySelectorAll('img.thumbnail');
const carouselImages = document.querySelectorAll('.carousel-item');
const thumbnailFirst = document.querySelector('.thumbnail');
const thumbnailAll = document.querySelectorAll('.thumbnail');
const nextButton = document.querySelector('.carousel-control-next-icon');
const prevButton = document.querySelector('.carousel-control-prev-icon');
const thumbnailLength = document.querySelectorAll('.thumbnail').length;
let thumbnailCount = 0;


thumbnailFirst.classList.add('highlightOrange');
// console.log(carouselImageActive);

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
};


nextButton.addEventListener('click', highlightThumbnailNext);
prevButton.addEventListener('click', highlightThumbnailPrev);

