import { useCustomMutation } from '@3divi/shared-components';
import { GET_TRIGGERS } from '../../triggers';
import {
  DELETE_ENDPOINTS,
  GET_ENDPOINTS,
  TDeleteEndpointsResult,
} from '../requests';

const useDeleteEndpoints = (
  loadingToast?: string,
  successToast?: string,
  errorToast?: string
) => {
  const [deleteEndpointsRequest, { loading }] =
    useCustomMutation<TDeleteEndpointsResult>(DELETE_ENDPOINTS, {
      loadingToast,
      successToast,
      errorToast,
    });

  const deleteEndpoints = (ids: string[]) => {
    deleteEndpointsRequest({
      variables: { ids },
      refetchQueries: [GET_ENDPOINTS, GET_TRIGGERS],
    });
  };

  return { deleteEndpoints, loading };
};

export { useDeleteEndpoints };
