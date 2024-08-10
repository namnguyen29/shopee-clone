import { AxiosError, AxiosResponse } from 'axios';

import { User } from './userType';
import { GenericResponse } from './genericResponseType';

export type RegisterInput = {
  email: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  expires: number;
  refresh_token: string;
  expires_refresh_token: string;
  user: User;
};

export type LoginInput = RegisterInput;

export type RegisterResponse = AxiosResponse<GenericResponse<AuthResponse>, RegisterInput>;

export type RegisterError = AxiosError<GenericResponse<{ email: string }>>;
