const itemsImageCount = document.querySelectorAll('.img-rounded');

itemsImageCount.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    e.currentTarget.nextElementSibling.classList.add('appears');
  });
});

itemsImageCount.forEach((item) => {
  item.addEventListener('mouseout', (e) => {
    e.currentTarget.nextElementSibling.classList.remove('appears');
  });
});
