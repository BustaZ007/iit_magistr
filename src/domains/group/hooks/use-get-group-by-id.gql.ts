import { useCustomQuery } from '@3divi/shared-components';
import { GET_GROUP_BY_ID, TGetGroupById } from '..';

const useGetGroupById = (id: string) => {
  const { data, loading } = useCustomQuery<TGetGroupById>(GET_GROUP_BY_ID, {
    variables: { ids: [id] },
  });
  const group = data?.profileGroups.collectionItems[0];

  return { group, loading };
};

export { useGetGroupById };
