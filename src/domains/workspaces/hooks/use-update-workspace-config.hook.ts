import { useCustomMutation } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import { UPDATE_WORKSPACE_CONFIG } from '../requests';

const useUpdateWorkspaceConfig = () => {
  const { t } = useTranslation('pages');
  const [updateWorkspaceConfigRequest, { loading }] = useCustomMutation(
    UPDATE_WORKSPACE_CONFIG,
    {
      successToast: t(`Settings.General.Updated`),
      loadingToast: t('Settings.General.Updating'),
      errorToast: t('Settings.General.Error'),
    }
  );

  const updateWorkspaceConfig = (
    activityThreshold?: number,
    notificationThreshold?: number
  ) => {
    updateWorkspaceConfigRequest({
      variables: { activityThreshold, notificationThreshold },
    });
  };

  return { loading, updateWorkspaceConfig };
};

export { useUpdateWorkspaceConfig };
