import type { FC } from "react";
import { ContactList } from "@brysonandrew/contact-list";
import {
  EMAIL,
  PHONE,
  PHONE_WITH_TRUNK,
} from "@pages/checkout/footer/config";

export const Contact: FC = () => {
  return (
    <footer className="relative container column-end py-16 z-50">
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
  );
};
