/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCustomQuery, usePagination } from '@3divi/shared-components';
import { DocumentNode, WatchQueryFetchPolicy } from '@apollo/client';
import { useEffect, useState } from 'react';

// filter any, так как для разных сущностей разные фильтры (где-то объект, где-то JSON)
type TUseGetItems = {
  limit: number;
  filter: any;
  order: any | null;
  fetchPolicy?: WatchQueryFetchPolicy;
  isPolling?: boolean;
  variables?: any;
  useUrl?: boolean;
};

function useGetPaginatedItems<T>(
  query: DocumentNode,
  {
    limit,
    filter,
    order,
    fetchPolicy,
    isPolling,
    useUrl = true,
    variables,
  }: TUseGetItems
) {
  type TGetEntity = {
    items: {
      totalCount: number;
      collectionItems?: T[];
    };
  };
  const [totalCount, setTotalCount] = useState<number>(0);
  const [items, setItems] = useState<T[]>();
  const pagination = usePagination({
    totalCount,
    limit,
    useUrl,
  });

  const { data, error, loading } = useCustomQuery<TGetEntity>(query, {
    variables: {
      limit,
      offset: pagination.offset,
      filter,
      order,
      withItems: totalCount > 0,
      ...variables,
    },
    fetchPolicy,
    isPolling,
  });

  useEffect(() => {
    if (data && !error) {
      setTotalCount(data.items.totalCount);
      setItems(data.items.collectionItems ?? []);
    } else if (error) {
      setItems([]);
      setTotalCount(0);
    }
  }, [data, error]);

  return {
    loading: !items || loading,
    items,
    pagination,
    totalCount,
    error,
  };
}

export { useGetPaginatedItems };
