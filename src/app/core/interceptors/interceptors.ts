import { AxiosError, HttpStatusCode } from 'axios';

import { createApiClient } from '@app-core/configs';
import { environments } from '@app-environments/environment';

const accessToken = JSON.parse(localStorage.getItem('accessToken') as string); // fake token

const http = createApiClient(environments.baseApiUrl);

http.httpInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.httpInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.status === HttpStatusCode.Unauthorized) {
      console.error('Logout or do something');
    }
    return Promise.reject(error);
  }
);
