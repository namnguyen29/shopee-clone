import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpConfig {
  private readonly baseHttp!: AxiosInstance;

  constructor(public apiUrl: string) {
    this.baseHttp = axios.create({
      baseURL: apiUrl
    });
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
