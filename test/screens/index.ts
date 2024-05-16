import puppeteer from "puppeteer";
import { TEST_SCREENS_DIR } from "~ops/fs";
import { VITE_CONFIG_SERVER_ORIGIN } from "~root/config/vite";
import { TEST_SCREENS_SIZES } from "~root/test/screens/constants";

(async () => {
  const browser =
    await puppeteer.launch();
  const page = await browser.newPage();

  for await (const size of TEST_SCREENS_SIZES) {
    await page.setViewport(size);

    const website_url =
      VITE_CONFIG_SERVER_ORIGIN;
    await page.goto(website_url, {
      waitUntil: "networkidle0",
    });
    // Capture screenshot
    await page.screenshot({
      path: `${TEST_SCREENS_DIR}/_${size.width}x${size.height}.jpg`,
    });
  }

  await browser.close();
})();
