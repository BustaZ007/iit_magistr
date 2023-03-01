import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { TUpdateTrigger, UPDATE_TRIGGER } from '../requests';

const useUpdateTrigger = (triggerId: string) => {
  const { t } = useTranslation('components');
  const [updateTriggerRequest, { loading }] = useCustomMutation<TUpdateTrigger>(
    UPDATE_TRIGGER,
    {
      loadingToast: t('Modal.UpdateTrigger.Loading'),
      successToast: t('Modal.UpdateTrigger.Success'),
      errorToast: t('Modal.UpdateTrigger.Error'),
    }
  );

  const updateTrigger = async (title?: string, endpointIds?: string[]) => {
    await updateTriggerRequest({
      variables: { triggerId, title, endpointIds },
    });
  };

  return { loading, updateTrigger };
};

export { useUpdateTrigger };
