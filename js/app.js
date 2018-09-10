(() => {
  console.log("Welcome to PureVolume website.");

  // VARIABLES

  // FUNCTIONS

  // EVENTS 
  window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
      let intro = document.querySelector("#introPage");
      intro.style.opacity = 1 - (1 / (window.innerHeight / window.scrollY));
    });
  });


})();