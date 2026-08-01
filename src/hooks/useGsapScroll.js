import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium GSAP scroll-triggered animation hook.
 *
 * @param {'fadeUp'|'fadeLeft'|'fadeRight'|'scaleIn'|'rotateIn'|'textReveal'} type
 * @param {object} options - { delay, duration, trigger, stagger }
 */
export default function useGsapScroll(type = 'fadeUp', options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { delay = 0, duration = 1, stagger = 0.1 } = options;
    const children = stagger ? el.children : [el];

    const defaults = {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
      duration,
      delay,
      ease: 'power3.out',
    };

    let tl;

    switch (type) {
      case 'fadeUp':
        tl = gsap.from(children, {
          ...defaults,
          y: 60,
          opacity: 0,
          stagger,
        });
        break;

      case 'fadeLeft':
        tl = gsap.from(children, {
          ...defaults,
          x: -80,
          opacity: 0,
          stagger,
        });
        break;

      case 'fadeRight':
        tl = gsap.from(children, {
          ...defaults,
          x: 80,
          opacity: 0,
          stagger,
        });
        break;

      case 'scaleIn':
        tl = gsap.from(children, {
          ...defaults,
          scale: 0.8,
          opacity: 0,
          stagger,
        });
        break;

      case 'rotateIn':
        tl = gsap.from(children, {
          ...defaults,
          rotation: 10,
          y: 40,
          opacity: 0,
          stagger,
        });
        break;

      case 'textReveal':
        tl = gsap.from(children, {
          ...defaults,
          y: '100%',
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
        });
        break;

      default:
        tl = gsap.from(el, { ...defaults, y: 40, opacity: 0 });
    }

    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [type, options.delay, options.duration, options.stagger]);

  return ref;
}

/**
 * Utility to apply parallax scroll effect to a background element.
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, [speed]);

  return ref;
}
