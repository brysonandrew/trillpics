import { FC } from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx, { ClassValue } from "clsx";
import { useViewport } from "@shell/providers/context/viewport";
import { Item } from "../../pics/item";
import { resolveCompositeKey } from "@utils/keys";
import { resolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";

type TProps = TClassValueProps & {
  listClassValue: ClassValue;
  name: string;
  title: string;
  srcs: readonly string[];
};
export const Category: FC<TProps> = ({
  name: categoryName,
  title,
  srcs,
  classValue,
  listClassValue,
}) => {
  const vp = useViewport();
  const size = vp.isDimensions
    ? vp.containerWidth / srcs.length
    : 0;

  return (
    <div
      className={clsx(
        "relative column-start grid-gap-16",
        classValue
      )}
    >
      <figure className="relative text-black-1 dark:text-white-9 z-20">
        {title}
      </figure>
      <ul
        className={clsx(
          "relative w-full h-full",
          listClassValue
        )}
      >
        {srcs.map((name, index) => {
          const src = `/categories/${categoryName}/${name}/0.avif`;
          const imageConfig =
            resolveConfigFromSize({
              size,
              colIndex:
                index % vp.colsCount,
            });
          return (
            <Item
              isShop
              canvas="black"
              src={name}
              key={resolveCompositeKey(
                categoryName,
                name
              )}
              imageConfig={imageConfig}
            />
          );
        })}
      </ul>
    </div>
  );
};
