import { environments } from '@app-environments/environment';
import { createApiClient } from './createApiClient';

export const httpClient = createApiClient(environments.baseApiUrl);
