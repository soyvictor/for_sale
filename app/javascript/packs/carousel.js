const thumbnails = document.querySelectorAll('img.thumbnail');
const carouselImages = document.querySelectorAll('.carousel-item');
const thumbnailFirst = document.querySelector('.thumbnail');
const thumbnailAll = document.querySelectorAll('.thumbnail');
const carouselSlider = document.querySelector('.carousel-slider');
const nextButton = document.querySelector('.carousel-control-next-icon');
console.log(nextButton);
const prevButton = document.querySelector('.carousel-control-prev-icon');


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


  // e.target.addEventListener('mouseout', () => e.target.classList.remove('highlightOrange'));
  // const carouselImg = document.querySelectorAll(".carousel-img");
  // console.log(carouselImg);
};

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', highlightOrange);
});

const highlightThumbnail = () => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('highlightOrange')
  });
  const carouselImageActive = document.querySelector('.carousel-item.active > img');
  const activeImageNumber = Number.parseInt(carouselImageActive.dataset.count, 10);
  console.log(activeImageNumber);

  thumbnailAll[`${activeImageNumber}`].classList.add('highlightOrange');


};


nextButton.addEventListener('click', highlightThumbnail);

