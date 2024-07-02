import { Rule } from "unocss";

export const DOTS: Rule[] = [
  [
    "_bi-dots",
    {
      "background-attachment":
        "scroll, scroll, scroll",
      "background-clip":
        "border-box, border-box, border-box",
      "background-color":
        "rgb(255, 255, 255)",
      "background-image":
        "linear-gradient(90deg, rgb(0, 0, 0) calc(10px), rgba(0, 0, 0, 0) 1%), linear-gradient(rgb(0, 0, 0) calc(10px), rgba(0, 0, 0, 0) 1%), none",
      "background-origin":
        "padding-box, padding-box, padding-box",
      "background-position-x":
        "50%, 50%, 0%",
      "background-position-y":
        "50%, 50%, 0%",
      "background-repeat":
        "repeat, repeat, repeat",
      "background-size":
        "11px 11px, 11px 11px, auto",
    },
  ],
];
