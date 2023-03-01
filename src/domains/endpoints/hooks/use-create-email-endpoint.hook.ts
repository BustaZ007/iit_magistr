import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  CREATE_EMAIL_ENDPOINT,
  GET_ENDPOINTS,
  TCreateEmailEndpoint,
} from '../requests';

const useCreateEmailEndpoint = () => {
  const { t } = useTranslation('components');
  const [createEmailEndpointRequest, { loading }] =
    useCustomMutation<TCreateEmailEndpoint>(CREATE_EMAIL_ENDPOINT, {
      loadingToast: t('Modal.CreateEndpoint.Loading'),
      successToast: t('Modal.CreateEndpoint.Success'),
      errorToast: t('Modal.CreateEndpoint.Error'),
    });

  const createEmailEndpoint = async (
    targetEmail: string,
    successCallback?: () => void
  ) => {
    const response = await createEmailEndpointRequest({
      variables: { targetEmail },
      refetchQueries: [GET_ENDPOINTS],
    });
    if (response.data?.createEmailEndpoint.ok) {
      if (successCallback) successCallback();
      return response.data.createEmailEndpoint.endpoint;
    }
    return undefined;
  };

  return { createEmailEndpoint, loading };
};

export { useCreateEmailEndpoint };
