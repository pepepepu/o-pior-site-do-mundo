import gsap from 'gsap';

export const animateSlideEntry = (container: HTMLElement | null) => {
  if (!container) return;

  const elements = container.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    {
      y: 40,
      opacity: 0,
      filter: 'blur(8px)',
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    }
  );
};

export const animate3DSpinningText = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.set(element, {
    transformPerspective: 900,
    transformStyle: 'preserve-3d',
  });

  gsap.to(element, {
    rotationY: 0,
    rotationX: 0,
    duration: 6,
    repeat: -1,
    ease: 'none',
  });

  gsap.to(element, {
    scale: 1.15,
    rotationZ: 12,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};