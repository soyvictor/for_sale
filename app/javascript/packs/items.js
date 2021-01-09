const itemsImageCount = document.querySelectorAll('.img-rounded');

itemsImageCount.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('appears');
  });
});

itemsImageCount.forEach((item) => {
  item.addEventListener('mouseout', () => {
    item.classList.remove('appears');
  });
});
