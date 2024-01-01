/*WOW.JS Parameters*/
wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };
  
  /*Sound for buttons*/
  document.getElementById('Clickbutton').addEventListener('mouseover', playHoverSound);

  function playHoverSound() {
  var audio = document.getElementById('buttonSound_hover');
  audio.currentTime = 0;
  audio.play();
  }