import { User } from './userType';

export type RegisterInput = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  access_token: string;
  expires: number;
  refresh_token: string;
  expires_refresh_token: string;
  user: User;
};
