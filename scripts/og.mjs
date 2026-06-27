import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const gs = readFileSync("src/fonts/GeneralSans-Variable.woff2").toString("base64");

const logo = `<svg width="46" height="46" viewBox="0 0 32 32">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1f4467"/><stop offset="100%" stop-color="#0c1e33"/>
  </linearGradient></defs>
  <rect width="32" height="32" rx="9" fill="url(#g)"/>
  <rect x="7.5" y="9" width="17" height="3.5" rx="1.4" fill="#fff"/>
  <rect x="14.25" y="9" width="3.5" height="12" rx="1.4" fill="#fff"/>
  <rect x="10.5" y="22.4" width="11" height="2.6" rx="1.3" fill="#2cb574"/>
</svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
@font-face{font-family:'General Sans';src:url(data:font/woff2;base64,${gs}) format('woff2');font-weight:200 700;}
*{margin:0;padding:0;box-sizing:border-box;}
body{width:1200px;height:630px;background:#fbf9f5;color:#0c1e33;font-family:'General Sans',sans-serif;overflow:hidden;position:relative;}
.glow{position:absolute;inset:0;background:radial-gradient(70% 55% at 50% -8%, rgba(28,140,90,0.10), transparent 60%);}
.sq{position:absolute;border-radius:8px;}
.wrap{position:relative;padding:84px;height:100%;display:flex;flex-direction:column;justify-content:space-between;}
.brand{display:flex;align-items:center;gap:14px;}
.brand .name{font-size:30px;font-weight:600;letter-spacing:-0.03em;}
.eyebrow{font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:0.16em;text-transform:uppercase;color:#8a97a4;}
h1{font-size:86px;font-weight:600;line-height:1.02;letter-spacing:-0.04em;max-width:1000px;}
h1 .g{color:#1c8c5a;}
.foot{font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:0.14em;text-transform:uppercase;color:#8a97a4;}
</style></head>
<body>
<div class="glow"></div>
<div class="sq" style="left:-40px;top:150px;width:54px;height:54px;background:#ed6a4a;transform:rotate(18deg);"></div>
<div class="sq" style="right:80px;top:120px;width:40px;height:40px;background:#6c4cf1;transform:rotate(45deg);"></div>
<div class="sq" style="right:150px;bottom:150px;width:34px;height:34px;background:#e8b04b;transform:rotate(12deg);"></div>
<div class="wrap">
  <div class="brand">${logo}<span class="name">Tenure</span></div>
  <div>
    <div class="eyebrow" style="margin-bottom:22px;">University ERP · built for turnover</div>
    <h1>People graduate.<br/><span class="g">The know-how stays.</span></h1>
  </div>
  <div class="foot">Supported by Startup Wednesday · Simon Business School</div>
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
