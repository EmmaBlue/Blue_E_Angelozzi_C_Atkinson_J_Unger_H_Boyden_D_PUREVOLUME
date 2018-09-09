(() => {
  console.log("Welcome to PureVolume website.");

  window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
      let intro = document.querySelector("#introPage");
      let logo = document.querySelector("#logo");
      intro.style.opacity = 1 - (1 / (window.innerHeight / window.scrollY));
      logo.style.opacity = -0.5 +  (1 / (window.innerHeight / window.scrollY));;
    });
  });


})();