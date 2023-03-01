import { useCustomQuery } from '@3divi/shared-components';
import { GET_GROUPS, TGroupsList } from '../requests';

function useGetGroups() {
  const { data, loading, error } = useCustomQuery<TGroupsList>(GET_GROUPS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only',
  });

  return { data, loading, error };
}

export { useGetGroups };
