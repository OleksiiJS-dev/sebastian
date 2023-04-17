const marqueeText = document.querySelector('.marquee-text');
const marqueeContainer = document.querySelector('.marquee-container');

let marqueePosition = 0;
let marqueeSpeed = 0.1;
let marqueeDirection = -1;


function moveMarquee() {
    marqueePosition += marqueeDirection * marqueeSpeed;
    if (marqueePosition <= -100) {
      marqueeDirection = 1;
    } else if (marqueePosition >= -50) {
      marqueeDirection = -1;
    }
    marqueeText.style.transform = 'translateX(' + marqueePosition + 'px)';
    requestAnimationFrame(moveMarquee);
  }

  moveMarquee()