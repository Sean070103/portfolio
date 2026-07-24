import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects");

const sites = [
  {
    file: "gerloff.png",
    url: "https://gerloff.vercel.app/",
    waitMs: 7000,
    scrollY: 1400,
  },
  {
    file: "ficomana.png",
    url: "https://ficomana.studio/",
    waitMs: 4000,
  },
  {
    file: "vividly.png",
    url: "https://vividly-drab-ten.vercel.app/",
    waitMs: 4000,
  },
  {
    file: "malaya-studios.png",
    url: "https://malayastudio.vercel.app/",
    waitMs: 4000,
  },
  {
    file: "eras-studios.png",
    url: "https://eras-pi.vercel.app/",
    waitMs: 5500,
    scrollText: "Solo sessions",
  },
  {
    file: "camtech.png",
    url: "https://camtech-gilt.vercel.app/",
    waitMs: 4500,
  },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const page = await context.newPage();
  await page.addInitScript(() => {
    const mark = (k) => sessionStorage.setItem(k, "1");
    [
      "intro",
      "intro-complete",
      "skipIntro",
      "gerloff-intro-seen",
      "gerloff-intro-v1",
      "gerloff-intro-v2",
    ].forEach(mark);
  });

  console.log(`Capturing ${site.file}`);
  await page.goto(site.url, { waitUntil: "load", timeout: 90000 });
  await page.waitForTimeout(site.waitMs);

  await page.evaluate(() => {
    document
      .querySelectorAll(
        '[role="dialog"], [aria-modal="true"], [aria-label*="intro" i], [aria-label*="opening" i]'
      )
      .forEach((el) => el.remove());
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  });

  if (site.scrollText) {
    await page.evaluate((text) => {
      const el = [...document.querySelectorAll("h1,h2,h3")].find((n) =>
        (n.textContent || "").includes(text)
      );
      if (el) {
        el.scrollIntoView({ block: "center", behavior: "instant" });
      }
    }, site.scrollText);
    await page.waitForTimeout(700);
  } else if (site.scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), site.scrollY);
    await page.waitForTimeout(700);
  }

  await page
    .waitForFunction(() => {
      const imgs = [...document.images].filter((i) => i.offsetParent !== null);
      if (!imgs.length) return true;
      return imgs.every((i) => i.complete && i.naturalWidth > 0);
    }, { timeout: 8000 })
    .catch(() => {});

  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(outDir, site.file),
    type: "png",
  });
  console.log(`  saved ${site.file}`);
  await page.close();
}

await browser.close();
console.log("Done");
