import { TGroup } from '../requests';
import { TModifyGroupData } from '../types';
import { useGetGroupById } from './use-get-group-by-id.gql';

type TReturnValues = {
  initialValues: TModifyGroupData | undefined;
  loading: boolean;
  shouldUpdate: boolean;
  group?: TGroup;
};

function useGetInitialGroupValues(groupId: string): TReturnValues {
  const { group, loading } = useGetGroupById(groupId);

  if (!group)
    return {
      initialValues: undefined,
      loading: false,
      shouldUpdate: false,
    };

  const groupInfo = group.info;

  const initialValues = {
    id: group.id,
    title: group.title,
    groupColor: groupInfo.color,
  };

  return {
    initialValues,
    loading,
    shouldUpdate: loading,
    group,
  };
}

export { useGetInitialGroupValues };
