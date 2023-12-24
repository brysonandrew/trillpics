import { useCursor } from '@context/cursor';
import { HOVER_KEY_DELIMITER } from '@utils/keys';
import { GLOBAL_KEY } from '@hooks/cursor/config';
import { IconWithText } from './IconWithText';
import { Sight } from './Sight';
import { OpenInNew as OpenInNewIcon } from '@components/icons/links/OpenInNew';
import { Box } from './Box';
import { Gallery } from '@components/icons/gallery/Gallery';
import {
  DARK_MODE_CURSOR_KEY,
  GALLERY_CURSOR_KEY,
  OPEN_IN_NEW_CURSOR_KEY,
  PROJECT_CURSOR_KEY,
  SOUND_CURSOR_KEY,
} from './config';

export const Switch = () => {
  const { hoverKey } = useCursor();

  const [cursorKey, key1, key2] = hoverKey
    ?.split(HOVER_KEY_DELIMITER)
    .map((v) => (v === GLOBAL_KEY ? null : v)) ?? [null];

  const lastKey = key2 ?? key1;

  switch (cursorKey) {
    case OPEN_IN_NEW_CURSOR_KEY: {
      return (
        <Sight>
          <Box>
            <IconWithText Icon={OpenInNewIcon}>
              {lastKey ?? 'Open'}
            </IconWithText>
          </Box>
        </Sight>
      );
    }
    case GALLERY_CURSOR_KEY:
    case PROJECT_CURSOR_KEY: {
      return (
        <Sight>
          <Box>
            <IconWithText Icon={Gallery}>
              View in image gallery
            </IconWithText>
          </Box>
        </Sight>
      );
    }
    case SOUND_CURSOR_KEY:
    case DARK_MODE_CURSOR_KEY: {
      return (
        <Sight>
          <Box>
            <IconWithText>
              {lastKey ?? 'Toggle'}
            </IconWithText>
          </Box>
        </Sight>
      );
    }
    case 'big': {
      return (
        <Sight
          style={{ opacity: 0.2 }}
          animate={{ opacity: 0.1, scale: 12 }}
        />
      );
    }
    case 'bigger': {
      return (
        <Sight animate={{ opacity: 0.1, scale: 18 }} />
      );
    }
    case 'none': {
      return <Sight animate={{ opacity: 0, scale: 0 }} />;
    }
    default:
      return <Sight animate={{ opacity: 1, scale: 1 }} />;
  }
};
