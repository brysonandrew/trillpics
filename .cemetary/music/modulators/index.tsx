import {
  FC,
  PropsWithChildren,
  useMemo,
} from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { box } from "~uno/rules/box";
import { ModulatorsButton } from "~/pages/video/music/modulators/button";
import { useIds } from "~/pages/video/music/modulators/ids";
import { ModulatorsInputs } from "~/pages/video/music/modulators/inputs";
import { TypographyXxxxs } from "~/components/layout/typography/xxxxs";

type TProps = PropsWithChildren<{
  id: string;
  audioParam?: AudioParam;
}>;
export const Modulators: FC<TProps> = ({
  children,
  ...props
}) => {
  const { id, audioParam } = props;
  const IDS = useIds(id);
  const {
    audio: { modulators },
  } = useMusicRefs();

  const modulatorRef = useMemo(() => {
    if (
      !modulators.refs[id] &&
      audioParam
    ) {
      modulators.refs[id] =
        modulators.connect(
          audioParam,
          id
        );
      return modulators.refs[id];
    }
  }, [audioParam]);

  const curr = modulatorRef?.isStarted;
  const isStarted = Boolean(curr);

  return (
    <div
      id={IDS.root}
      className="relative column-stretch"
      style={{
        gap: box._00625,
        // padding: box._00625,
        borderRadius:
          box.radius.m + box._00625,
      }}
    >
      {/* <LinesVertical
        positionClass="absolute bottom-0"
        colorClass="_bi-border"
        style={{
          top: 0, // box._0375,
          left: -box._01875,
          bottom: box._2,
          borderWidth: 1,
          pointerEvents: "auto",
          cursor: "pointer",
        }}
      /> */}

      {children}
      <ModulatorsButton
        ids={IDS}
        {...props}
      >
        <TypographyXxxxs>
          modulator
        </TypographyXxxxs>
      </ModulatorsButton>

      {modulators.refs[id] && (
        <ModulatorsInputs
          ids={IDS}
          style={{
            display: isStarted
              ? "flex"
              : "none",
          }}
          {...props}
        />
      )}
    </div>
  );
};
