import { ContactList } from "@brysonandrew/contact-list";
import { B } from "@brysonandrew/interactive";
import { useVideoStore } from "@pages/index/video/store";
import { Video } from "@pages/index/video";
import { useDarkMode } from "@brysonandrew/dark-mode";
import {
  EMAIL,
  PHONE,
  PHONE_WITH_TRUNK,
} from "../../checkout/footer/config";
import clsx from "clsx";

export const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const {
    isVideoMode,
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();
  const handleProcess = () => {
    console.log("PROCES");
  };
  const handlePreview = () => {
    togglePreview(!isPreviewOpen);
  };
  return (
    <>
      {isVideoMode && (
        <>
          <div className="py-2" />
          {isPreviewOpen && (
            <div className="fill-screen center">
              <Video />
            </div>
          )}
          <footer className="row-space sticky left-0 bottom-0 right-0 h-20 w-full px-4">
            {!isPreviewOpen && <div
              className="fill bg-indigo w-full"
              style={{
                mixBlendMode: isDarkMode
                  ? "exclusion"
                  : "multiply",
              }}
            />}
            <div>
              <B
                title="View video preview"
                classValue={clsx("gap-2")}
                onClick={handlePreview}
              >
                {isPreviewOpen ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22px"
                      height="22px"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill="currentColor"
                        d="M15 17h1v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1V6h-1V5h-1v1h-1v1h-1v1h-1v1h-2V8H9V7H8V6H7V5H6v1H5v1h1v1h1v1h1v1h1v2H8v1H7v1H6v1H5v1h1v1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1m2 3h-3v-1h-1v-1h-1v-1h-2v1H9v1H8v1H5v-1H4v-1H3v-3h1v-1h1v-1h1v-2H5V9H4V8H3V5h1V4h1V3h3v1h1v1h1v1h2V5h1V4h1V3h3v1h1v1h1v3h-1v1h-1v1h-1v2h1v1h1v1h1v3h-1v1h-1Z"
                      />
                    </svg>
                    Close
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 3H2v14h8v2H8v2h8v-2h-2v-2h8V3zm-6 12H4V5h16v10z"
                      />
                    </svg>
                    Preview
                  </>
                )}
              </B>
            </div>
            <B
              title="Generate video"
              classValue="gap-2"
              onClick={handleProcess}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 7h4v4H7zm-2 6v-2h2v2zm0 0v4H1v-4zm8 0h-2v-2h2zm4 0h-4v4h4zm2-2v2h-2v-2zm0 0h4V7h-4z"
                />
              </svg>
              Generate
            </B>
          </footer>
        </>
      )}
      <footer className="relative w-container column-end py-16 z-50">
        <ContactList
          isCopy
          email={EMAIL}
          phone={{
            display: PHONE,
            withTrunk: PHONE_WITH_TRUNK,
          }}
          classValue="gap-2"
          className="text-sm font-sans mt-1 mr-4"
        />
      </footer>
    </>
  );
};
