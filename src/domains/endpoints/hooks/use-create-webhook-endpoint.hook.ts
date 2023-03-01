import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  CREATE_WEBHOOK_ENDPOINT,
  GET_ENDPOINTS,
  TCreateWebHookEndpointOutput,
} from '../requests';

const useCreateEWebhookEndpoint = () => {
  const { t } = useTranslation('components');
  const [createWebhookEndpointRequest, { loading }] =
    useCustomMutation<TCreateWebHookEndpointOutput>(CREATE_WEBHOOK_ENDPOINT, {
      loadingToast: t('Modal.CreateEndpoint.Loading'),
      successToast: t('Modal.CreateEndpoint.Success'),
      errorToast: t('Modal.CreateEndpoint.Error'),
    });

  const createWebhookEndpoint = async (
    url: string,
    requestMethod: string,
    successCallback?: () => void
  ) => {
    const response = await createWebhookEndpointRequest({
      variables: { url, requestMethod },
      refetchQueries: [GET_ENDPOINTS],
    });
    if (response.data?.createWebhookEndpoint.ok) {
      if (successCallback) successCallback();
      return response.data.createWebhookEndpoint.endpoint;
    }
    return undefined;
  };

  return { createWebhookEndpoint, loading };
};

export { useCreateEWebhookEndpoint };
