import { useCustomQuery, usePagination } from '@3divi/shared-components';
import { useEffect, useState } from 'react';
import { GET_ENDPOINTS, TGetEndpointsResult } from '../requests';
import { useGetEndpointsFilters } from './use-get-endpoints-filters.hook';
import { PaginationLimits } from '../../../consts';

const useGetEndpoints = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const pagination = usePagination({
    totalCount,
    limit: PaginationLimits.ENDPOINTS,
    useUrl: true,
  });
  const { order, filter } = useGetEndpointsFilters();
  const { data, error } = useCustomQuery<TGetEndpointsResult>(GET_ENDPOINTS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only',
    variables: {
      limit: pagination.limit,
      offset: pagination.offset,
      filter,
      order,
      withItems: true,
    },
  });

  useEffect(() => {
    if (data) {
      setTotalCount(data.items.totalCount);
    }
  }, [data]);

  const endpoints = data?.items?.collectionItems;
  return {
    endpoints,
    error,
    loading: data === undefined || (endpoints === undefined && totalCount > 0),
    pagination,
    totalCount,
  };
};

export { useGetEndpoints };
