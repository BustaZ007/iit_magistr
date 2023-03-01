import { HttpLink, makeVar, split } from '@apollo/client';
import {
  client,
  licenseVar,
  setClientLinks,
  workspaceVar,
} from '@3divi/shared-components';
import { setContext } from '@apollo/client/link/context';
import { INTERNAL_API } from '../consts';
import { SequrOsIntegrationAPITitles } from '../domains/sequr-os-integration';

export const pollingDateVar = makeVar<{
  [x: string]: string | null;
}>({
  notifications: null,
  activities: null,
  persons: null,
});

const SecureOsIntegrationHttpLink = new HttpLink({
  uri: () => `/securos-integration-service/`,
});

const authLink = setContext((_, { headers }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  headers: {
    ...headers,
    Token: workspaceVar(),
  },
}));

const selectIntegrationApiUrl = split(
  (operation) => SequrOsIntegrationAPITitles.includes(operation.operationName),
  authLink.concat(SecureOsIntegrationHttpLink),
  new HttpLink({
    uri: () =>
      `/api/v2/${workspaceVar() ? `?workspace_id=${workspaceVar()}` : ''}`,
  })
);
/**
 * В зависимости от имени запроса GraphQL выбирает точку входа в API
 */
const selectApiUrl = split(
  (operation) => INTERNAL_API.includes(operation.operationName),
  new HttpLink({
    uri: () =>
      `/internal-api/v2/?${
        workspaceVar() ? `workspace_id=${workspaceVar()}` : ''
      }${licenseVar() ? `&license_id=${licenseVar()}` : ''}`,
  }),
  selectIntegrationApiUrl
);

setClientLinks(selectApiUrl);

export { client };
