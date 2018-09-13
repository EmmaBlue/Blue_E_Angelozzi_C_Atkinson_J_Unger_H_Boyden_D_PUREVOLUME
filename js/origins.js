(() => {
  console.log("Welcome to PureVolume website.");


// ORIGINS PAGE VARIABLES
  const circle = document.querySelector('#circle5'),
  imageBox = document.querySelector('.imageScreen'),
  close = document.querySelector('.close-imageScreen');

//ORIGINS FUNCTIONS
  function openImage() {
    imageBox.classList.add('show-imageScreen');
  }

  function closeImage() {
    imageBox.classList.remove('show-imageScreen');
  }

//ORIGINS EVENT LISTENERS
  circle.addEventListener('click', openImage);
  close.addEventListener('click', closeImage);

})();
