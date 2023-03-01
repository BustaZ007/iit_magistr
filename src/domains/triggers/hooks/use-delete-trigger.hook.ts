import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { DELETE_TRIGGER, GET_TRIGGERS, TDeleteTrigger } from '../requests';
import { GET_GROUPS } from '../../group';

const useDeleteTrigger = (triggerId: string) => {
  const { t } = useTranslation('components');
  const [deleteTriggerRequest, { loading }] = useCustomMutation<TDeleteTrigger>(
    DELETE_TRIGGER,
    {
      loadingToast: t('Modal.DeleteTrigger.Loading'),
      successToast: t('Modal.DeleteTrigger.Success'),
      errorToast: t('Modal.DeleteTrigger.Error'),
    }
  );

  const deleteTrigger = () => {
    deleteTriggerRequest({
      variables: { triggerId },
      refetchQueries: [GET_TRIGGERS, GET_GROUPS],
    });
  };

  return { loading, deleteTrigger };
};

export { useDeleteTrigger };
