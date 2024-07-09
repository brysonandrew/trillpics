export const TRACKS =
  `music/Adikop - Bring Me Back (feat. Nieulotni) [NCS Release].mp3
music/Cartoon, Jeja - On & On (feat. Daniel Levi) [NCS Release].mp3
music/Diamond Eyes - Worship [NCS Release].mp3
music/Michael White - Got You [NCS Release].mp3
music/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3`
    .split("\n")
    .map((src) => {
      const info = src
        .replace("music/", "")
        .replace(".mp3", "");
      const [artist, title] =
        info.split(" - ");
      return {
        src,
        artist,
        title,
      };
    });
