import { useCustomMutation } from '@3divi/shared-components';
import {
  GET_SECUR_OS_INTEGRATIONS,
  TUpdateSecurOsIntegratiionResponse,
  UPDATE_SECUR_OS_INTEGRATION,
} from '../requests';

type TUseUpdateSecurOsIntegration = {
  login: string;
  password: string;
  url: string;
};

export function useUpdateSecurOsIntegration() {
  const [updateSecurOsIntegrationRequest, { error, loading }] =
    useCustomMutation<TUpdateSecurOsIntegratiionResponse>(
      UPDATE_SECUR_OS_INTEGRATION,
      { refetchQueries: [GET_SECUR_OS_INTEGRATIONS] }
    );

  const updateSecurOsIntegration = ({
    login,
    password,
    url,
  }: TUseUpdateSecurOsIntegration) => {
    updateSecurOsIntegrationRequest({
      variables: { login, password, url },
    });
  };

  return { updateSecurOsIntegration, error, loading };
}
