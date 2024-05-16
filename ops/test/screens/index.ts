import puppeteer from "puppeteer";
import {
  VITE_CONFIG_SERVER_ORIGIN,
} from "~root/config/vite";

(async () => {
  const browser =
    await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1280,
    height: 720,
  });

  const website_url =
    VITE_CONFIG_SERVER_ORIGIN;
  await page.goto(website_url, {
    waitUntil: "networkidle0",
  });

  // Capture screenshot
  await page.screenshot({
    path: "screenshot.jpg",
  });

  await browser.close();
})();
