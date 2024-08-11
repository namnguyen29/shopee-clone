import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode
} from 'axios';

import { HTTP_TIMEOUT } from '@app-shared/constants';
import { errorToast } from '@app-shared/utils';

export class HttpConfig {
  private readonly baseHttp!: AxiosInstance;

  constructor(
    public apiUrl: string,
    public accessToken?: string
  ) {
    this.baseHttp = axios.create({
      baseURL: apiUrl,
      timeout: HTTP_TIMEOUT,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.baseHttp.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.baseHttp.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          errorToast<string>(error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  public get httpInstance(): AxiosInstance {
    return this.baseHttp;
  }

  public get<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.get<T, R, D>(url, config);
  }

  public post<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.post<T, R, D>(url, data, config);
  }

  public put<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.put<T, R, D>(url, data, config);
  }

  public delete<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.delete<T, R, D>(url, config);
  }
}
