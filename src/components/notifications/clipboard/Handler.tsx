import type { FC } from 'react';
import styled from '@emotion/styled';
import { I } from '@components/Icon';
import { P1 } from '@components/layout/space/P1';
import { P4 } from '@components/layout/space/P4';
import { FADE_PRESENCE } from '@constants/animation';
import { CLIPBOARD_SUCCESS_ICON } from '@brysonandrew/icons-keys';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { Loading } from './Loading';
import { TClipboardContext } from '@pages/gallery/context/clipboard/useClipboardContext';

const Root = styled(motion.div)``;

type TProps = TClipboardContext;
export const Handler: FC<TProps> = ({
  copying,
  onEnd,
}) => {
  return (
    <AnimatePresence>
      {copying !== null && (
        <Root
          {...FADE_PRESENCE}
          onClick={onEnd}
          className='cover-fixed center w-full h-full inset-0 bg-black-07 text-4xl z-50 pointer-events-none'
        >
          {copying === 'pending' ? (
            <>
              <Loading sizeClassValue='w-20 h-20' />
              <P1 />
              <div>copying</div>
            </>
          ) : (
            <div className='column gap-8'>
              <header className='row'>
                <div className='tracking-widest uppercase'>
                  {copying.title} copied
                </div>
                <P4 />
                <I
                  icon={
                    CLIPBOARD_SUCCESS_ICON
                  }
                />
              </header>
              <h4 className='text-primary text-4xl normal-case'>"{copying.value}"</h4>
            </div>
          )}
        </Root>
      )}
    </AnimatePresence>
  );
};
