import gsap from 'gsap';

export const fadeIn = (node, xVal, yVal, duration) =>
  gsap.from(node, {
    x: xVal,
    y: yVal,
    duration: duration,
    opacity: 0,
    ease: 'power2.inOut',
  });
