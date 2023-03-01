import { dev, useCustomMutation } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import {
  CREATE_SECUR_OS_INTEGRATION,
  GET_SECUR_OS_INTEGRATIONS,
  TCreateIntegrationResponse,
} from '../requests';

type TCreateSecurOsIntegration = {
  login: string;
  password: string;
  url: string;
};

type TUseCreateSecurOsIntegration = {
  callback?: () => void;
};

export const useCreateSecurOsIntegration = ({
  callback,
}: TUseCreateSecurOsIntegration) => {
  const { t } = useTranslation('pages');
  const [createIntegrationRequest, { error, loading }] =
    useCustomMutation<TCreateIntegrationResponse>(CREATE_SECUR_OS_INTEGRATION, {
      loadingToast: t('Settings.Integration.Creation.Creating'),
      successToast: t('Settings.Integration.Creation.Created'),
      errorToast: t('Settings.Integration.Creation.Failed'),
      refetchQueries: [GET_SECUR_OS_INTEGRATIONS],
    });

  const createIntegration = ({
    login,
    password,
    url,
  }: TCreateSecurOsIntegration) => {
    createIntegrationRequest({
      variables: { login, password, url },
    })
      .then(() => {
        if (callback) callback();
      })
      .catch((err) => {
        dev.log('Creation SecurOs integration', err);
      });
  };

  return { createIntegration, error, loading };
};
