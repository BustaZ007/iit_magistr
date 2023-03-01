import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  CREATE_GROUP,
  GET_GROUPS,
  TCreateGroupOutput,
  TGroup,
} from '../requests';
import { TModifyGroupData } from '../types';

export function useCreateGroup() {
  const { t } = useTranslation();
  const [createGroupRequest, { loading, error }] =
    useCustomMutation<TCreateGroupOutput>(CREATE_GROUP, {
      successToast: t(`components:Groups.Created`),
      loadingToast: t('components:Groups.Creating'),
    });

  async function createGroup(
    values: TModifyGroupData,
    callback?: (group: TGroup) => void
  ) {
    const profileGroupData = {
      title: values.title,
      info: {
        color: values.groupColor,
      },
    };
    const createGroupResponse = await createGroupRequest({
      variables: {
        profileGroupData,
      },
      refetchQueries: [GET_GROUPS],
    });

    if (createGroupResponse.data?.createProfileGroup.ok) {
      const newGroup = createGroupResponse.data.createProfileGroup.profileGroup;
      if (callback) {
        callback(newGroup);
      }
      return newGroup;
    }
    return undefined;
  }

  return {
    loading,
    error,
    createGroup,
  };
}
