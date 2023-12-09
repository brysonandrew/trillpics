import {
  FC,
  useEffect,
  useState,
} from 'react';
import { useClient } from 'react-supabase';
import { Auth } from '.';
import { CONTEXT } from './constants';
import { TContext } from './types';
import { TChildren } from '@t/index';

type TProps = { children: TChildren };
export const Provider: FC<TProps> = ({
  children,
}) => {
  const client = useClient();
  const [state, setState] =
    useState<TContext>(CONTEXT);

  useEffect(() => {
    const init = async () => {
      const session = (
        await client.auth.getSession()
      ).data.session;
      setState({
        session,
        user: session?.user ?? null,
      });
    };
    init();
  }, []);

  // useAuthStateChange((event, session) => {
  //   console.log(`Supabase auth event: ${event}`, session);
  //   // setState({ session, user: session?.user ?? null });
  // });

  return (
    <Auth.Provider value={state}>
      {children}
    </Auth.Provider>
  );
};
