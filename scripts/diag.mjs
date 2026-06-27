import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
const info = await p.evaluate(() => {
  const el = document.querySelector(".wordmark-giant");
  if (!el) return { found: false };
  const cs = getComputedStyle(el);
  return {
    found: true,
    fontSize: cs.fontSize,
    fontFamily: cs.fontFamily,
    lineHeight: cs.lineHeight,
    backgroundClip: cs.backgroundClip,
    webkitBackgroundClip: cs.webkitBackgroundClip,
    color: cs.color,
    rectH: el.getBoundingClientRect().height,
  };
});
console.log(JSON.stringify(info, null, 2));
await b.close();
