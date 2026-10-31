/**
 * Shared animation setup. Every component imports GSAP from here so the
 * plugins are registered once and the bundle is shared.
 */
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(Flip, ScrollTrigger, SplitText);

/** False when the visitor asked for reduced motion. */
export const prefersMotion = () => window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

/** True for a mouse or trackpad (hover effects make sense). */
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export { gsap, Flip, ScrollTrigger, SplitText };
