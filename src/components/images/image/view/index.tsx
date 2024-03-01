import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { BCirc } from '@brysonandrew/interactive';
import { Item } from './Item';
import { VIEW_PARAM } from './config';
import { Close } from './Close';
import { VIEW_ICON_1 } from '@brysonandrew/icons-keys';

const Root = styled.div``;

type TProps = { id: string };
export const View: FC<TProps> = ({
  id,
}) => {
  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const viewParam =
    searchParams.get(VIEW_PARAM);
  const navigate = useNavigate();
  const isOpen = viewParam === id;

  const handleToggle = () => {
    if (isOpen) {
      searchParams.delete(VIEW_PARAM);
    } else {
      searchParams.set(VIEW_PARAM, id);
    }
    navigate(
      `${pathname}?${searchParams.toString()}`,
    );
  };

  return (
    <Root>
      <Item isOpen={isOpen} id={id}>
        {isOpen ? (
          <Close
            onClose={handleToggle}
          />
        ) : (
          <BCirc
            title={`View details of image id:${id}`}
            classValue='text-blue'
            look='interactive-circ-light'
            icon={VIEW_ICON_1 as any}
            onClick={handleToggle}
          />
        )}
      </Item>
    </Root>
  );
};
