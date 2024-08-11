import { HttpConfig } from '@app-core/configs';

export const createApiClient = (apiUrl: string): HttpConfig => new HttpConfig(apiUrl);
