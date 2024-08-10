import { httpClient } from './apiClient';
import {
  AuthResponse,
  GenericResponse,
  RegisterError,
  RegisterInput,
  RegisterResponse
} from '@app-shared/types';

export const register = async (body: RegisterInput): Promise<RegisterResponse> => {
  try {
    const result = await httpClient.post<GenericResponse<AuthResponse>, RegisterInput>(
      '/registerr',
      body
    );
    return result;
  } catch (error) {
    const axiosError = error as RegisterError;
    throw axiosError;
  }
};

export const authApiKey = {
  register: 'REGISTER',
  login: 'LOGIN'
};
