import type { FC } from "react";
import { IconsSvgGradient16vb24 } from "~/components/icons/svg/gradient/16vb24";


export const IconsTrash: FC = (props) => {
  return (
    <IconsSvgGradient16vb24
      d="M16 2v4h6v2h-2v14H4V8H2V6h6V2zm-2 2h-4v2h4zm0 4H6v12h12V8zm-5 2h2v8H9zm6 0h-2v8h2z"
      {...props}
    />
  );
};
