console.log('hi from carousel!');
const thumbnails = document.querySelectorAll('img.thumbnail');

const highlightOrange = (e) => {
  console.log(e.target);
  e.target.classList.add('highlightOrange');
  e.target.addEventListener('mouseout', () => e.target.classList.remove('highlightOrange'))
};

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', highlightOrange);
});
