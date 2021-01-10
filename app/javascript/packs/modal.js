// begin wesbos code
const modal = document.querySelector('.modal');
const carousel = document.querySelector('.carousel-inner');
const carouselImages = document.querySelectorAll('.carousel-item');
const prevButton = modal.querySelector('.prev');
const nextButton = modal.querySelector('.next');
const modalImageCounter = document.querySelector('.modal-image-counter');
const modalImagesLength = carouselImages.length;
console.log(modalImagesLength);
let modalImagesCount = 0;

function openModal() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if(modal.matches('.open')) {
      console.info('Modal already open');
      return; //stop the function from opening
    }
    modal.classList.add('open');

    // Event listeners to be bound when we open the modal.

    window.addEventListener('keyup', handleKeyUp);
    console.log(nextButton);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard...
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if(e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function updateImageCounter(count) {
  modalImageCounter.innerText = `image ${count} of ${modalImagesLength}`;
}

  function showNextImage() {
    showImage(currentImage.nextElementSibling || carousel.firstElementChild);

  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || carousel.lastElementChild);
  }

  function showImage(el) {
    if(!el) {
      console.info('no image to show');
      return
    }
      console.log(el);
      // update the modal with this info
      const image = el.querySelector('img');
      const modalImageNumber = Number.parseInt(image.dataset.count, 10);
      console.log(modalImageNumber);
      updateImageCounter(modalImageNumber);
      const source = image.src;
      modal.querySelector('img').src = source
      modal.querySelector('h2').textContent = el.title;
      modal.querySelector('figure p').textContent = el.dataset.description;
      currentImage = el;
      openModal();
  }

  // These are our event listeners

  carouselImages.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)));
  modal.addEventListener('click', handleClickOutside);

