import { httpClient } from './apiClient';
import {
  AuthResponse,
  GenericResponse,
  LoginError,
  LoginInput,
  LoginResponse,
  RegisterError,
  RegisterInput,
  RegisterResponse
} from '@app-shared/types';

export const register = async (body: RegisterInput): Promise<RegisterResponse> => {
  try {
    const result = await httpClient.post<GenericResponse<AuthResponse>, RegisterInput>(
      '/register',
      body
    );
    return result;
  } catch (error) {
    const axiosError = error as RegisterError;
    throw axiosError;
  }
};

export const login = async (body: LoginInput): Promise<LoginResponse> => {
  try {
    const result = await httpClient.post<GenericResponse<AuthResponse>, LoginInput>('/login', body);
    return result;
  } catch (error) {
    const axiosError = error as LoginError;
    throw axiosError;
  }
};

export const authApiKey = {
  register: 'REGISTER',
  login: 'LOGIN'
};
