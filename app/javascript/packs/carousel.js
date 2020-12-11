console.log('hi from carousel!');
const thumbnails = document.querySelectorAll('img.thumbnail');
const carouselImages = document.querySelectorAll('.carousel-item');

const highlightOrange = (e) => {
  const imageNumber = Number.parseInt(e.target.dataset.count);
  e.target.classList.add('highlightOrange');
  console.log(carouselImages[0]);
  carouselImages.forEach((image) => {
    image.classList.remove('active');
  });
  carouselImages[`${imageNumber}`].classList.add('active');


  e.target.addEventListener('mouseout', () => e.target.classList.remove('highlightOrange'));
  // const carouselImg = document.querySelectorAll(".carousel-img");
  // console.log(carouselImg);
};

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', highlightOrange);
});
