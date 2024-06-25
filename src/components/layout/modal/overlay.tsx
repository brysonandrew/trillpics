import type { FC } from "react";
import { IconsInfo } from "~/components/icons/info";
import clsx from "clsx";
import { TexturesMesh } from "~/components/textures/mesh";
import {
  TDivProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { PortalBody } from "@brysonandrew/layout-portal";

export type TModalOverlayConfig =
  TDivProps & {
    Icon?: FC<TSvgProps>;
    onCancel?(): void;
    onOk?(): void;
    title: string;
  };
export const ModalOverlay: FC<
  TModalOverlayConfig
> = ({
  Icon  = IconsInfo,
  onCancel,
  onOk,
  children,
  classValue,
  ...props
}) => {

  return (
    <PortalBody>
      <div
        className="fixed inset-0 bg-black-06 backdrop-blur-lg z-50"
        {...props}
      />
      <div
        className={clsx(
          "absolute column-stretch dark:text-white-5 grow-0 shrink left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 char-gap-6 z-50",
          "py-2 px-3",
          "background",
          classValue
        )}
        {...props}
      >
        <div className="relative flex flex-row items-center p-4 lg:gap-4 shrink-0">
          <Icon />
          <h4 className="whitespace-nowrap text-2.5xl md:text-4.5xl">
            {props.title}
          </h4>
        </div>
        <div className="relative _bi-radial w-full h-1" />
        <p className="relative p-4 text-lg">
          {children}
        </p>

        {onCancel || onOk ? (
          <>
            <div className="p-2">
              <div className="border border-main w-full" />
            </div>
            <div className="row-space">
              {onCancel && (
                <button
                  onClick={onCancel}
                  className="relative px-4 py-2.5 border border-main hover:_bi-radial"
                >
                  <TexturesMesh classValue="inset-2" />
                  Cancel
                </button>
              )}
              {onOk && (
                <button
                  onClick={onOk}
                  className="relative px-4 py-2.5 border border-main hover:_bi-radial"
                >
                  <TexturesMesh classValue="inset-2" />
                  Ok
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="p-0" />
        )}
      </div>
    </PortalBody>
  );
};
