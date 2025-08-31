import './style.css';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.addEventListener('load', () => {
  document.getElementById('video-back-text')!.innerText =
    `GRAB THE VAULT > PUT IT IN THE CASHOUT STATION > DEFENSE THE CASHOUT STATION > `.repeat(
      5
    );

  gsap.registerPlugin(ScrollTrigger);

  const video = document.getElementById('video') as HTMLVideoElement;
  gsap.to(video, {
    x: '60vw',
    y: '-50vh',
    scrollTrigger: {
      trigger: '#video',
      start: 'top 0%',
      pinSpacing: true,
      scrub: true,
      end: 'bottom 10%',
      markers: true,
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#platforms',
        pin: true,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pinSpacing: true,
        toggleActions:  'restart none reverse reverse',
      },
      defaults: {
        duration: 0.2,
      },
    })
    .from(document.body, {
      backgroundColor: 'black',
    });

  document.querySelector('video')!.play();
});
