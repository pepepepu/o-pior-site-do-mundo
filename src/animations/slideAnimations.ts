import gsap from 'gsap';

export const animateSlideEntry = (container: HTMLElement | null) => {
  if (!container) return;

  const elements = container.querySelectorAll('[data-animate]');
  
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

export const animateModeSwitch = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { scale: 0.96, opacity: 0.5 },
    { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.7)' }
  );
};