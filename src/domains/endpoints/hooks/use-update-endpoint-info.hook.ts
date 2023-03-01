import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { formEndpointInfoObject } from '../../../helpers';
import {
  GET_ENDPOINTS,
  GET_ENDPOINT_BY_ID,
  TEndpointMeta,
  TUpdateEndpointInfoResult,
  UPDATE_ENDPOINT_INFO,
} from '../requests';

type TUseUpdateEndpointInfo = {
  type: string;
} & TEndpointMeta;

const useUpdateEndpointInfo = () => {
  const { t } = useTranslation('components');
  const [updateEndpointInfoRequest, { loading }] =
    useCustomMutation<TUpdateEndpointInfoResult>(UPDATE_ENDPOINT_INFO, {
      loadingToast: t('Modal.ManageEndpoint.Updating'),
      successToast: t('Modal.ManageEndpoint.SuccessUpdating'),
      errorToast: t('Modal.ManageEndpoint.ErrorUpdating'),
    });

  const updateEndpointInfo = (
    id: string,
    endpointInfo: TUseUpdateEndpointInfo
  ) => {
    updateEndpointInfoRequest({
      variables: {
        id,
        endpointInfo: JSON.stringify(formEndpointInfoObject(endpointInfo)),
      },
      refetchQueries: [GET_ENDPOINTS, GET_ENDPOINT_BY_ID],
    });
  };

  return { loading, updateEndpointInfo };
};

export { useUpdateEndpointInfo };
