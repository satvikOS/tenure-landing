import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.env.BASE || "http://localhost:3000";
const paths = (process.argv[2] || "/").split(",");
const outDir = process.env.OUT || "/tmp/shots";
const settle = Number(process.env.SETTLE || 1800);
mkdirSync(outDir, { recursive: true });

const viewports = [
  { tag: "desktop", width: 1440, height: 900 },
  { tag: "mobile", width: 390, height: 844 },
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const tick = () => {
        const vh = window.innerHeight;
        window.scrollBy(0, vh * 0.75);
        y += vh * 0.75;
        if (y < document.body.scrollHeight + vh) setTimeout(tick, 200);
        else resolve();
      };
      tick();
    });
  });
}

const browser = await chromium.launch();
for (const p of paths) {
  const slug = p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "_");
  for (const v of viewports) {
    const page = await browser.newPage({
      viewport: { width: v.width, height: v.height },
      deviceScaleFactor: 2,
    });
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.waitForTimeout(700);
    await autoScroll(page); // trigger whileInView reveals (once:true keeps them shown)
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(settle);
    await page.screenshot({ path: `${outDir}/${slug}-${v.tag}.png`, fullPage: true });
    await page.close();
    console.log("shot", slug, v.tag);
  }
}
await browser.close();
console.log("done");
