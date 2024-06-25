import { TClassOverrides } from "~/types/classes";
import {
  colorFilter,
  fontSizeFilter,
  opacityFilter,
  positionFilter,
  sizeFilter,
} from "~/utils/classes/overrides/filters";
import { isDefined } from "~/utils/validation/is/defined";

export const overrideClasses = (
  className: string,
  overrides?: TClassOverrides
) => {
  if (!isDefined(overrides))
    return className;

  const {
    sizeClass,
    fontSizeClass,
    opacityClass,
    colorClass,
    positionClass,
  } = overrides;
  let names = className.split(/\s/g);

  console.log(`i: ${className}`);

  console.log(overrides)

  if (isDefined(positionClass)) {
    names = names.filter(
      positionFilter
    );
    names = [positionClass, ...names];
  }
  if (isDefined(sizeClass)) {
    names = names.filter(sizeFilter);
    names = [sizeClass, ...names];
  }
  if (isDefined(fontSizeClass)) {
    names = names.filter(
      fontSizeFilter
    );
    names = [fontSizeClass, ...names];
  }
  if (isDefined(opacityClass)) {
    names = names.filter(opacityFilter);
    names = [opacityClass, ...names];
  }
  if (isDefined(colorClass)) {
    names = names.filter(colorFilter);
    names = [colorClass, ...names];
  }

  className = names.join(" ");
  console.log(`o: ${className}`);

  return className;
};
