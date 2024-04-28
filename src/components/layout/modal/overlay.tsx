import type { FC } from "react";
import { IconsInfo } from "~/components/icons/info";
import clsx from "clsx";
import { DecorationNet } from "~/components/decoration/background/net";
import {
  TDivProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { PortalBody } from "@brysonandrew/layout-portal";
import { useBoxStyle } from "~/store/hooks/core/box/use-box-style";

export type TModalOverlayConfig =
  TDivProps & {
    Icon: FC<TSvgProps>;
    onCancel?(): void;
    onOk?(): void;
    title: string;
  };
export const ModalOverlay: FC<
  TModalOverlayConfig
> = ({
  Icon,
  onCancel,
  onOk,
  children,
  classValue,
  ...props
}) => {
  const borderStyle = useBoxStyle({layer:'flat',borderRadius:'borderRadius',size:'md'})

  return (
    <PortalBody>
      <div
        className="fixed inset-0 bg-black-06 backdrop-blur-lg z-50"
        {...props}
      />
      <div
        className={clsx(
          "fixed column-stretch dark:text-white-5 grow-0 shrink gap-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 pt-4 pb-6 z-10 char-gap-6 z-50",
          "background",
          "_net-gradient",
          classValue
        )}
        style={borderStyle}
        {...props}
      >
        <div className="relative flex flex-row items-center gap-2 lg:gap-4 shrink-0">
          <IconsInfo />
          <h4 className="whitespace-nowrap text-2.5xl mt-1 md:text-4.5xl">
            {props.title}
          </h4>
        </div>
        <div className="relative _radial-gradient w-full h-1" />

        <p className="relative text-lg">
          {children}
        </p>
        <div className="p-2">
          <div className="border border-main w-full" />
        </div>
        <div className="row-space">
          <button
            onClick={onCancel}
            className="relative px-4 py-2.5 border border-main hover:_radial-gradient"
          >
            <DecorationNet classValue="inset-2" />
            Cancel
          </button>
          <button
            onClick={onOk}
            className="relative px-4 py-2.5 border border-main hover:_radial-gradient"
          >
            <DecorationNet classValue="inset-2" />
            Ok
          </button>
        </div>
      </div>
    </PortalBody>
  );
};
