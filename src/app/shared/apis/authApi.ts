import { AxiosError, AxiosResponse } from 'axios';

import { http } from './apiClient';
import { GenericResponseType, RegisterInput, RegisterResponse } from '@app-shared/types';

export const register = async (): Promise<
  AxiosResponse<GenericResponseType<RegisterResponse>, RegisterInput>
> => {
  try {
    const result = await http.post<GenericResponseType<RegisterResponse>, RegisterInput>(
      '/register'
    );
    return result;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};
