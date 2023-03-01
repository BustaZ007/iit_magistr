import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { CREATE_TRIGGER, GET_TRIGGERS, TCreateTrigger } from '../requests';
import { GET_GROUPS } from '../../group';

const useCreateTrigger = () => {
  const { t } = useTranslation('components');
  const [createTriggerRequest, { loading }] = useCustomMutation<TCreateTrigger>(
    CREATE_TRIGGER,
    {
      loadingToast: t('Modal.CreateTrigger.Loading'),
      successToast: t('Modal.CreateTrigger.Success'),
      errorToast: t('Modal.CreateTrigger.Error'),
    }
  );

  const createTrigger = (
    profileGroupId: string,
    title: string,
    endpointIds: string[]
  ) => {
    createTriggerRequest({
      variables: { profileGroupId, title, endpointIds },
      refetchQueries: [GET_TRIGGERS, GET_GROUPS],
    });
  };

  return { loading, createTrigger };
};

export { useCreateTrigger };
