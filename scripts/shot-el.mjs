import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.env.BASE || "http://localhost:3000";
const path = process.argv[2] || "/";
const sel = process.argv[3] || "main > section";
const outDir = process.env.OUT || "/tmp/shots";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 2,
});
await page.goto(base + path, { waitUntil: "networkidle" });
await page.waitForTimeout(700);
await page.evaluate(async () => {
  await new Promise((r) => {
    let y = 0;
    const t = () => {
      window.scrollBy(0, window.innerHeight * 0.75);
      y += window.innerHeight * 0.75;
      if (y < document.body.scrollHeight + window.innerHeight) setTimeout(t, 180);
      else r();
    };
    t();
  });
});
await page.waitForTimeout(800);
const els = await page.$$(sel);
for (let i = 0; i < els.length; i++) {
  await els[i].screenshot({ path: `${outDir}/sec-${i}.png` });
  console.log("sec", i);
}
await browser.close();
console.log("done", els.length);
