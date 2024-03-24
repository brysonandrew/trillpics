import { Divider } from "@components/decoration/Divider";
import { I } from "@components/Icon";
import { motion } from "framer-motion";
import { CATEGORIES } from "../../home/footer/config";

export const Footer = () => {
  return (
    <>
      <div className="relative h-3 bg-red">
        <Divider classValue="sticky left-0 bottom-0 right-0 z-50" />
      </div>
      <footer className="relative column bg-section py-16 z-50">
        <div className="w-container row-space">
          <div />
          <ul className="column-end gap-4">
            {CATEGORIES.map(
              ({
                title,
                value,
                href,
                iconProps,
              }) => (
                <li key={value}>
                  <motion.a
                    title={title}
                    className="row gap-2"
                    href={href}
                  >
                    <I {...iconProps} />
                    <span className="tracking-widest text-sm">
                      {value}
                    </span>
                  </motion.a>
                </li>
              )
            )}
          </ul>
        </div>
      </footer>
    </>
  );
};
