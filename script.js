const images = [
    { src: 'images/1.jpeg', hdSrc: 'images/1.jpeg', caption: 'Image 1 in HD' },
    { src: 'images/2.jpeg', hdSrc: 'images/2.jpeg', caption: 'Image 2 in HD' },
    { src: 'images/3.jpeg', hdSrc: 'images/3.jpeg', caption: 'Image 3 in HD' },
    { src: 'images/4.jpeg', hdSrc: 'images/4.jpeg', caption: 'Image 4 in HD' },
    { src: 'images/5.jpeg', hdSrc: 'images/5.jpeg', caption: 'Image 5 in HD' },
    { src: 'images/6.jpg', hdSrc: 'images/6.jpg', caption: 'Image 6 in HD' },
    { src: 'images/7.jpg', hdSrc: 'images/7.jpg', caption: 'Image 7 in HD' },
    { src: 'images/8.jpg', hdSrc: 'images/8.jpg', caption: 'Image 8 in HD' },
    { src: 'images/9.jpg', hdSrc: 'images/9.jpg', caption: 'Image 9 in HD' },
    { src: 'images/10.jpg', hdSrc: 'images/10.jpg', caption: 'Image 10 in HD' },
    { src: 'images/11.jpg', hdSrc: 'images/11.jpg', caption: 'Image 11 in HD' },
    { src: 'images/12.jpg', hdSrc: 'images/12.jpg', caption: 'Image 12 in HD' }
  ];
  
  const gallery = document.querySelector('.gallery');
  const modalContainer = document.querySelector('.modal-container');
  const modalImg = document.querySelector('.modal-img');
  const modalCaption = document.querySelector('.modal-caption');
  
  // create gallery items and append them to the gallery container
  images.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.setAttribute('data-index', index);
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption;
    
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
  });
  
  // open modal and display selected image and caption
  function openModal(index) {
    const image = images[index];
    
    modalImg.src = image.hdSrc;
    modalImg.alt = image.caption;
    modalCaption.textContent = image.caption;
    
    modalContainer.style.display = 'flex';
  }
  
  // close modal and reset modal content
  function closeModal() {
    modalImg.src = '';
    modalImg.alt = '';
    modalCaption.textContent = '';
    
    modalContainer.style.display = 'none';
  }
  
  // event delegation - listen for click events on gallery container
  gallery.addEventListener('click', event => {
    const clickedItem = event.target.closest('.gallery-item');
    
    if (!clickedItem) return;
    
    const index = clickedItem.getAttribute('data-index');
    
    openModal(index);
  });
  
  // close modal when user clicks on modal container or modal image
  modalContainer.addEventListener('click', event => {
    if (event.target !== modalImg) {
      closeModal();
    }
  });
  
  // close modal when user presses the Escape key
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  