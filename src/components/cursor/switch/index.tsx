import { useCursor } from '@context/cursor';
import { HOVER_KEY_DELIMITER } from '@utils/keys';
import { GLOBAL_KEY } from '@hooks/cursor/config';
import { Sight } from './Sight';
import { OpenInNew as OpenInNewIcon } from '@components/icons/links/OpenInNew';
import { Gallery } from '@components/icons/gallery/Gallery';
import {
  CART_CURSOR_KEY,
  EXIT_CURSOR_KEY,
  GALLERY_CURSOR_KEY,
  OPEN_IN_NEW_CURSOR_KEY,
  PROJECT_CURSOR_KEY,
  SHOP_CURSOR_KEY,
  SOUND_CURSOR_KEY,
  VIEW_CURSOR_KEY,
} from './config';
import { Notification } from './Notification';

export const Switch = () => {
  const { hoverKey } = useCursor();

  const [cursorKey, key1, key2] =
    hoverKey
      ?.split(HOVER_KEY_DELIMITER)
      .map((v) =>
        v === GLOBAL_KEY ? null : v,
      ) ?? [null];

  const lastKey = key2 ?? key1;

  switch (cursorKey) {
    case SHOP_CURSOR_KEY:
    case OPEN_IN_NEW_CURSOR_KEY: {
      return (
        <Notification
          Icon={OpenInNewIcon}
        >
          {lastKey ?? 'Open'}
        </Notification>
      );
    }
    case CART_CURSOR_KEY:
    case SOUND_CURSOR_KEY: {
      return (
        <Notification>
          {lastKey ?? 'Toggle'}
        </Notification>
      );
    }
    // case DARK_MODE_CURSOR_KEY: {
    //   return (
    //     <Notification key={darkKey}>
    //       {`switch to ${
    //         darkKey === 'dark'
    //           ? 'light'
    //           : 'dark'
    //       } mode`}
    //     </Notification>
    //   );
    // }
    case VIEW_CURSOR_KEY: {
      return (
        <Notification icon='lets-icons:view-fill'>
          View fullscreen
        </Notification>
      );
    }
    case EXIT_CURSOR_KEY: {
      return (
        <Notification icon='material-symbols:close'>
          Exit fullscreen
        </Notification>
      );
    }

    case 'big': {
      return (
        <Sight
          style={{ opacity: 0.2 }}
          animate={{
            opacity: 0.1,
            scale: 12,
          }}
        />
      );
    }
    case 'none': {
      return (
        <Sight
          animate={{
            opacity: 0,
            scale: 0,
          }}
        />
      );
    }
    default:
      return (
        <Sight
          animate={{
            opacity: 1,
            scale: 1,
          }}
        />
      );
  }
};
