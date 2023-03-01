import { useTranslation } from 'react-i18next';
import { dev, useCustomMutation } from '@3divi/shared-components';
import {
  DELETE_SECUR_OS_INTEGRATION,
  GET_SECUR_OS_INTEGRATIONS,
  TDeleteSecurOsIntegrationResponse,
} from '../requests';

type TuseDeleteSecurOsIntegration = {
  callback?: () => void;
};

export function useDeleteSecurOsIntegration({
  callback,
}: TuseDeleteSecurOsIntegration) {
  const { t } = useTranslation('pages');
  const [deleteIntegrationRequest, { loading, error }] =
    useCustomMutation<TDeleteSecurOsIntegrationResponse>(
      DELETE_SECUR_OS_INTEGRATION,
      {
        loadingToast: t('Settings.Integration.Deletion.Loading'),
        successToast: t('Settings.Integration.Deletion.Success'),
        errorToast: t('Settings.Integration.Deletion.Error'),
        refetchQueries: [GET_SECUR_OS_INTEGRATIONS],
      }
    );

  const deleteIntegration = (): void => {
    deleteIntegrationRequest()
      .then(() => {
        if (callback) callback();
      })
      .catch((err) => {
        dev.log('Deletion SecurOS integration', err);
      });
  };

  return {
    deleteIntegration,
    loading,
    error,
  };
}
