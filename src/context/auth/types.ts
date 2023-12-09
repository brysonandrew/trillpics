import { Session, UserIdentity } from '@supabase/supabase-js';

export type TContext = {
  session: null | Session;
  user: null | any;
};
