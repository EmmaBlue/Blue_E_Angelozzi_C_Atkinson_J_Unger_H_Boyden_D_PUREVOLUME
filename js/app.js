(() => {
  console.log("Welcome to PureVolume website.");

  // VARIABLES
  let bckgrdVideo = document.querySelector('.bg-video__content');

  // FUNCTIONS

  // create <source> video element to load dynamically different video size
  function bgVideo_mobile(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;

    element.appendChild(source);
  }


  // EVENTS 
  window.addEventListener('load', () => {

    // onLoad eent on scroll for fade effect on landing page
    window.addEventListener('scroll', () => {
      let intro = document.querySelector("#introPage");
      intro.style.opacity = 1 - (1 / (window.innerHeight / window.scrollY));
    });


    // create source video element according to screen size
    if (window.matchMedia("(max-width: 700px)").matches) {
      bgVideo_mobile(bckgrdVideo, 'video/bg_videos/mobile.m4v', 'video/mp4');
    } else if (window.matchMedia("(max-width: 999px)").matches) {
      bgVideo_mobile(bckgrdVideo, 'video/bg_videos/tablet.m4v', 'video/mp4');
    } else if (window.matchMedia("(min-width: 1000px)").matches) {
      bgVideo_mobile(bckgrdVideo, 'video/bg_videos/desktop.m4v', 'video/mp4');
    }

  });

})();