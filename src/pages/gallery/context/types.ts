import { TEntriesContext } from "@pages/gallery/context/entries/useEntriesContext";
import { TClipboardContext } from "./clipboard/useClipboardContext";

export type TGallery = {
  entriesContext: TEntriesContext;
  clipboardContext: TClipboardContext;
};
