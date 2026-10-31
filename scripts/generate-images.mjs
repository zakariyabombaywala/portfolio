/**
 * Generates the favicon set and the Open Graph share image into /public.
 * Run with: npm run images
 *
 * The share image text is rendered as vector paths with satori, using
 * Schibsted Grotesk downloaded from Google Fonts, then rasterised with sharp.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));

const colors = {
  canvas: '#EDEFF2',
  surface: '#FFFFFF',
  ink: '#16181D',
  muted: '#5A6170',
  line: '#D5D9E0',
  blue: '#0D99FF',
  pink: '#F2487A',
};

// Keep in sync with src/data/site.ts if you change your name or role.
const og = {
  name: 'Muhammad Zakariya',
  role: 'Front-End Tech Lead',
  line: 'React, Astro & WordPress. Figma to web.',
  footer: 'Surat, India. Open to relocation',
};

/* ------------------------------------------------------------------
   Icon: a "Z" inside a selected frame.
   ------------------------------------------------------------------ */
function iconSvg({ rounded = true } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="${rounded ? 7 : 0}" fill="${colors.ink}"/>
  <rect x="6.5" y="6.5" width="19" height="19" fill="none" stroke="${colors.blue}" stroke-width="1.2"/>
  <path d="M11 11h10v2.3L14.4 18.7H21V21H11v-2.3l6.6-5.4H11z" fill="#FFFFFF"/>
  <g fill="#FFFFFF" stroke="${colors.blue}" stroke-width="1">
    <rect x="4.75" y="4.75" width="3.5" height="3.5"/>
    <rect x="23.75" y="4.75" width="3.5" height="3.5"/>
    <rect x="23.75" y="23.75" width="3.5" height="3.5"/>
    <rect x="4.75" y="23.75" width="3.5" height="3.5"/>
  </g>
</svg>
`;
}

async function writeIcons() {
  await writeFile(`${publicDir}favicon.svg`, iconSvg());
  const flat = Buffer.from(iconSvg({ rounded: false }));
  const round = Buffer.from(iconSvg());

  await sharp(round, { density: 300 }).resize(32, 32).png().toFile(`${publicDir}favicon-32.png`);
  await sharp(flat, { density: 600 }).resize(180, 180).png().toFile(`${publicDir}apple-touch-icon.png`);
  await sharp(flat, { density: 600 }).resize(192, 192).png().toFile(`${publicDir}icon-192.png`);
  await sharp(flat, { density: 1200 }).resize(512, 512).png().toFile(`${publicDir}icon-512.png`);
}

/* ------------------------------------------------------------------
   Open Graph image (1200 x 630)
   ------------------------------------------------------------------ */
async function loadFont(weight) {
  // Without a browser user agent Google Fonts serves TrueType, which satori can read.
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@${weight}`,
  ).then((res) => res.text());
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Could not find a font file for weight ${weight}`);
  return fetch(url).then((res) => res.arrayBuffer());
}

const el = (type, style, children) => ({ type, props: { style, children } });

const handle = (pos) =>
  el('div', {
    position: 'absolute',
    width: 14,
    height: 14,
    background: '#FFFFFF',
    border: `2px solid ${colors.blue}`,
    ...pos,
  });

async function writeOgImage() {
  const [regular, bold] = await Promise.all([loadFont(400), loadFont(700)]);

  const frame = el(
    'div',
    { position: 'relative', display: 'flex', border: `2px solid ${colors.blue}`, padding: '6px 10px 14px' },
    [
      el('div', { fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: -2.5, color: colors.ink }, og.name),
      handle({ top: -8, left: -8 }),
      handle({ top: -8, right: -8 }),
      handle({ bottom: -8, right: -8 }),
      handle({ bottom: -8, left: -8 }),
    ],
  );

  const tag = el(
    'div',
    {
      display: 'flex',
      alignSelf: 'flex-start',
      marginBottom: 18,
      padding: '6px 12px',
      borderRadius: 5,
      background: colors.blue,
      color: '#FFFFFF',
      fontSize: 22,
      fontWeight: 700,
    },
    'Heading, 96/96, Schibsted Grotesk Bold',
  );

  const tree = el(
    'div',
    {
      // satori sizes boxes as content-box, so subtract the padding.
      width: 1200 - 88 * 2,
      height: 630 - 96 - 72,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '96px 88px 72px',
      background: colors.canvas,
      fontFamily: 'Schibsted Grotesk',
    },
    [
      el('div', { display: 'flex', flexDirection: 'column' }, [
        tag,
        el('div', { display: 'flex' }, [frame]),
        el('div', { display: 'flex', flexDirection: 'column', marginTop: 44 }, [
          el('div', { fontSize: 44, fontWeight: 700, color: colors.ink }, og.role),
          el('div', { fontSize: 36, color: colors.muted, marginTop: 6 }, og.line),
        ]),
      ]),
      el(
        'div',
        {
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 22,
          borderTop: `2px solid ${colors.line}`,
          fontSize: 26,
          color: colors.muted,
        },
        [el('div', {}, og.footer), el('div', { color: colors.pink, fontWeight: 700 }, 'Available on Upwork')],
      ),
    ],
  );

  const svg = await satori(tree, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Schibsted Grotesk', data: regular, weight: 400, style: 'normal' },
      { name: 'Schibsted Grotesk', data: bold, weight: 700, style: 'normal' },
    ],
  });

  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`${publicDir}og-image.png`);
}

await mkdir(publicDir, { recursive: true });
await writeIcons();
await writeOgImage();
console.log('Wrote favicon.svg, favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png, og-image.png');
