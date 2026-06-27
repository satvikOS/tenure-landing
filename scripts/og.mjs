import { chromium } from "playwright";
import { readFileSync } from "node:fs";

// embed the self-hosted body font so the card renders fully on-brand
const gs = readFileSync("src/fonts/GeneralSans-Variable.woff2").toString("base64");

// concentric "Tenure rings" for the card backdrop
const circles = Array.from({ length: 8 }, (_, i) => {
  const r = 28 + i * 23;
  const op = (0.3 + (i / 7) * 0.6).toFixed(2);
  const w = (1 + (i / 7) * 1.1).toFixed(2);
  return `<circle cx="200" cy="200" r="${r}" stroke="#c98a3a" stroke-width="${w}" opacity="${op}" />`;
}).join("");

const seal = `<svg class="seal" viewBox="0 0 32 32" fill="none">
  <g stroke="#c98a3a" stroke-linecap="round">
    <circle cx="16" cy="16" r="11" stroke-width="1" opacity="0.45"/>
    <circle cx="16" cy="16" r="8" stroke-width="1.1" opacity="0.7"/>
    <circle cx="16" cy="16" r="5" stroke-width="1.2" opacity="0.95"/>
  </g>
  <circle cx="16" cy="16" r="2.4" fill="#e6a94e"/>
</svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
@font-face{font-family:'General Sans';src:url(data:font/woff2;base64,${gs}) format('woff2');font-weight:200 700;}
*{margin:0;padding:0;box-sizing:border-box;}
body{width:1200px;height:630px;background:#0f1115;color:#f2efe9;font-family:'General Sans',system-ui,sans-serif;overflow:hidden;position:relative;}
.glow{position:absolute;inset:0;background:radial-gradient(72% 64% at 80% 26%, rgba(201,138,58,0.20), transparent 60%);}
.rings{position:absolute;right:-180px;top:50%;transform:translateY(-50%);width:780px;height:780px;opacity:0.55;-webkit-mask-image:radial-gradient(closest-side,#000 60%,transparent);mask-image:radial-gradient(closest-side,#000 60%,transparent);}
.rings .core{fill:#e6a94e;}
.wrap{position:relative;padding:84px;height:100%;display:flex;flex-direction:column;justify-content:space-between;}
.brand{display:flex;align-items:center;gap:14px;}
.brand .seal{width:38px;height:38px;}
.brand .name{font-family:'Fraunces',serif;font-size:32px;letter-spacing:-0.01em;font-weight:500;}
h1{font-family:'Fraunces',serif;font-size:80px;line-height:1.03;letter-spacing:-0.02em;max-width:780px;font-weight:400;}
h1 em{font-style:italic;background:linear-gradient(100deg,#c98a3a,#e6a94e 55%,#c98a3a);-webkit-background-clip:text;background-clip:text;color:transparent;}
.foot{font-family:'IBM Plex Mono',monospace;font-size:19px;letter-spacing:0.16em;color:#7c828a;text-transform:uppercase;}
</style></head>
<body>
<div class="glow"></div>
<svg class="rings" viewBox="0 0 400 400" fill="none">${circles}<circle class="core" cx="200" cy="200" r="9"/></svg>
<div class="wrap">
  <div class="brand">${seal}<span class="name">Tenure</span></div>
  <h1>Knowledge that <em>outlasts</em> the term.</h1>
  <div class="foot">tenurework.com&nbsp;&nbsp;·&nbsp;&nbsp;Founded at Simon Business School</div>
</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(700);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("public/og.png written");
