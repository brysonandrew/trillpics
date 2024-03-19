import fg from "fast-glob";
import { rename } from "fs/promises";

(async () => {
  try {
    const files = await fg([
      "public/prev-originals/*.png",
    ]);
    console.log(files);

    let name = 1;
    for await (const file of files) {
      rename(
        file,
        `public/originals/${name}.png`
      );
      name++;
    }

    console.log(`last name: ${name}`);
  } catch (error) {
    console.error(error);
  }
})();
