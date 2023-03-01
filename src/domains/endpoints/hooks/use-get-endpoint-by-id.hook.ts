import { useCustomQuery } from '@3divi/shared-components';
import {
  GET_ENDPOINT_BY_ID,
  TGetEndpointByIdResult,
  TSingleEndpoint,
} from '../requests';

const useGetEndpointById = (id: string) => {
  const { data, loading } = useCustomQuery<TGetEndpointByIdResult>(
    GET_ENDPOINT_BY_ID,
    { variables: { id } }
  );

  const endpoint =
    data?.endpoints.collectionItems[0] ?? ({} as TSingleEndpoint);

  return { endpoint, loading };
};

export { useGetEndpointById };
