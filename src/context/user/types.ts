
export type TUser = {
  email: string;
  password: string;
} | null;

export type TContext = {
  user: TUser;
  onUpdateUser(user: TUser): void;

};
