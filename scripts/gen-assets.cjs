const fs = require('fs');
const sharp = require('sharp');

const dirs = [
  'public/assets/images/hero',
  'public/assets/images/services',
  'public/assets/images/gallery',
  'public/assets/brand'
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

const serviceImages = [
  { name: 'intruder-alarms', title: 'Intruder Alarms', code: 'ALARM' },
  { name: 'electric-fencing', title: 'Electric Fencing', code: 'FENCE' },
  { name: 'gate-garage-automation', title: 'Gate and Garage Automation', code: 'AUTO' },
  { name: 'cctv-installation', title: 'CCTV Installation', code: 'CCTV' },
  { name: 'access-control', title: 'Access Control', code: 'ACCESS' },
  { name: 'intercoms', title: 'Intercom Systems', code: 'COMMS' },
  { name: 'diy-projects', title: 'DIY Security Kits', code: 'DIY' }
];

const galleryImages = [
  { name: 'gate-motor-1', title: 'Sliding Gate Motor', cat: 'Automation' },
  { name: 'electric-fence-1', title: 'Wall-Top Electric Fence', cat: 'Electric Fencing' },
  { name: 'cctv-1', title: '4K IP Surveillance', cat: 'CCTV' },
  { name: 'alarm-1', title: 'Perimeter Outdoor Beams', cat: 'Intruder Alarms' },
  { name: 'access-1', title: 'Estate Biometric Access', cat: 'Access Control' },
  { name: 'intercom-1', title: 'GSM Video Intercom', cat: 'Intercoms' }
];

async function createPlaceholders() {
  // Hero background
  const heroSvg = `<svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b0e10"/>
        <stop offset="50%" stop-color="#1d2328"/>
        <stop offset="100%" stop-color="#0b0e10"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="1000" cy="100" r="300" fill="#d99a1b" opacity="0.1"/>
    <text x="600" y="280" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="#d99a1b" text-anchor="middle">GATE AND GUARD PROJECTS</text>
    <text x="600" y="330" font-family="Arial, sans-serif" font-size="20" fill="#c9cdd2" text-anchor="middle">Protect. Automate. Connect.</text>
  </svg>`;
  await sharp(Buffer.from(heroSvg)).jpeg({ quality: 85 }).toFile('public/assets/images/hero/hero-bg.jpg');

  // Services
  for (const item of serviceImages) {
    const svg = `<svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#151a1e"/>
      <rect x="20" y="20" width="760" height="460" fill="none" stroke="#d99a1b" stroke-width="2" opacity="0.4" rx="8"/>
      <circle cx="400" cy="200" r="48" fill="#1d2328" stroke="#d99a1b" stroke-width="2"/>
      <text x="400" y="206" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#d99a1b" text-anchor="middle">${item.code}</text>
      <text x="400" y="310" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle">${item.title}</text>
      <text x="400" y="360" font-family="Arial, sans-serif" font-size="18" fill="#d99a1b" text-anchor="middle">Gate and Guard Projects</text>
    </svg>`;
    await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(`public/assets/images/services/${item.name}.jpg`);
  }

  // Gallery
  for (const item of galleryImages) {
    const svg = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1d2328"/>
      <rect x="15" y="15" width="770" height="570" fill="none" stroke="#c9cdd2" stroke-width="1" opacity="0.2" rx="6"/>
      <text x="400" y="280" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">${item.title}</text>
      <rect x="300" y="320" width="200" height="32" rx="16" fill="#d99a1b" opacity="0.2"/>
      <text x="400" y="342" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#d99a1b" text-anchor="middle">${item.cat}</text>
    </svg>`;
    await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(`public/assets/images/gallery/${item.name}.jpg`);
  }

  // Brand assets from /tmp/file_attachments if present
  const shieldEmblem = '/tmp/file_attachments/Dual-Tone Metallic Shield Emblem.png';
  const shieldWordmark = '/tmp/file_attachments/Chrome and Gold Shield Wordmark.png';
  const wideWordmark = '/tmp/file_attachments/file_0000000054f4820e9ffea2802298de49.png';

  if (fs.existsSync(shieldEmblem)) {
    // logo-mark
    await sharp(shieldEmblem).resize({ width: 256, height: 256, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/assets/brand/logo-mark.png');
    await sharp(shieldEmblem).resize({ width: 256, height: 256, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp().toFile('public/assets/brand/logo-mark.webp');
    // logo-stacked
    await sharp(shieldEmblem).resize({ width: 512, height: 512, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/assets/brand/logo-stacked.png');
    await sharp(shieldEmblem).resize({ width: 512, height: 512, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp().toFile('public/assets/brand/logo-stacked.webp');
  }

  if (fs.existsSync(wideWordmark)) {
    // logo-horizontal wide
    await sharp(wideWordmark).trim().resize({ width: 600, fit: 'inside' }).png().toFile('public/assets/brand/logo-horizontal.png');
    await sharp(wideWordmark).trim().resize({ width: 600, fit: 'inside' }).webp().toFile('public/assets/brand/logo-horizontal.webp');
  } else if (fs.existsSync(shieldWordmark)) {
    // logo-horizontal
    await sharp(shieldWordmark).trim().resize({ width: 600, fit: 'inside' }).png().toFile('public/assets/brand/logo-horizontal.png');
    await sharp(shieldWordmark).trim().resize({ width: 600, fit: 'inside' }).webp().toFile('public/assets/brand/logo-horizontal.webp');
  }

  console.log('All image and brand assets created successfully.');
}

createPlaceholders();
