/**
 * Live measurements of the hero headline, shared between the hero
 * (which measures) and the specs panel (which displays them).
 */
export interface HeadlineSpecs {
  width: number;
  height: number;
  fontSize: number;
  lineHeight: number;
  fontWeight: string;
  /** In em, e.g. -0.04 */
  letterSpacing: number;
  /** Hex without the #, e.g. "16181D" */
  color: string;
}

type Listener = (specs: HeadlineSpecs) => void;

let latest: HeadlineSpecs | undefined;
const listeners = new Set<Listener>();

export function publish(specs: HeadlineSpecs) {
  latest = specs;
  listeners.forEach((listener) => listener(specs));
}

/** Calls the listener now if a measurement exists, then on every change. */
export function subscribe(listener: Listener) {
  listeners.add(listener);
  if (latest) listener(latest);
}

export const weightNames: Record<string, string> = {
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
};

/** "rgb(22, 24, 29)" -> "16181D" */
export function toHex(color: string) {
  const [r = 0, g = 0, b = 0] = color.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
  return [r, g, b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('').toUpperCase();
}
