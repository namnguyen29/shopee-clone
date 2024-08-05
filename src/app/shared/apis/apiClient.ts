import { createApiClient } from '@app-core/configs';
import { environments } from '@app-environments/environment';

export const httpClient = createApiClient(environments.baseApiUrl);
