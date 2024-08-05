import { AxiosError, AxiosResponse } from 'axios';

import { httpClient } from './createApiClient';
import {
  GenericResponseType,
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse
} from '@app-shared/types';

export const register = async (): Promise<
  AxiosResponse<GenericResponseType<RegisterResponse>, RegisterInput>
> => {
  try {
    const result = await httpClient.post<GenericResponseType<RegisterResponse>, RegisterInput>(
      '/register'
    );
    return result;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

export const login = async (): Promise<
  AxiosResponse<GenericResponseType<RegisterResponse>, RegisterInput>
> => {
  try {
    const result = await httpClient.post<GenericResponseType<LoginResponse>, LoginInput>('/login');
    return result;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};
