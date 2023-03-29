const images = [
    { src: 'image1.jpg', hdSrc: 'image1_hd.jpg', caption: 'Image 1' },
    { src: 'image2.jpg', hdSrc: 'image2_hd.jpg', caption: 'Image 2' },
    { src: 'image3.jpg', hdSrc: 'image3_hd.jpg', caption: 'Image 3' },
    { src: 'image4.jpg', hdSrc: 'image4_hd.jpg', caption: 'Image 4' },
    { src: 'image5.jpg', hdSrc: 'image5_hd.jpg', caption: 'Image 5' },
    { src: 'image6.jpg', hdSrc: 'image6_hd.jpg', caption: 'Image 6' },
    { src: 'image7.jpg', hdSrc: 'image7_hd.jpg', caption: 'Image 7' },
    { src: 'image8.jpg', hdSrc: 'image8_hd.jpg', caption: 'Image 8' },
    { src: 'image9.jpg', hdSrc: 'image9_hd.jpg', caption: 'Image 9' },
    { src: 'image10.jpg', hdSrc: 'image10_hd.jpg', caption: 'Image 10' },
    { src: 'image11.jpg', hdSrc: 'image11_hd.jpg', caption: 'Image 11' },
    { src: 'image12.jpg', hdSrc: 'image12_hd.jpg', caption: 'Image 12' }
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
  