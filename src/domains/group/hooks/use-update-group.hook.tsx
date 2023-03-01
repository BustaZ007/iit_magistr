import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { TModifyGroupData } from '../types';
import { TUpdateGroupOutput, UPDATE_GROUP } from '../requests';

export function useUpdateGroup() {
  const { t } = useTranslation();
  const [updateGroupReq, { loading }] = useCustomMutation<TUpdateGroupOutput>(
    UPDATE_GROUP,
    {
      loadingToast: t('components:Groups.Updating'),
      successToast: t(`components:Groups.Updated`),
    }
  );

  async function updateGroup(
    values: TModifyGroupData,
    previousValues?: TModifyGroupData
  ) {
    if (
      previousValues &&
      (previousValues.groupColor !== values.groupColor ||
        previousValues.title !== values.title)
    ) {
      await updateGroupReq({
        variables: {
          profileGroupId: values.id,
          profileGroupData: {
            title: values.title,
            info: {
              color: values.groupColor,
            },
          },
        },
      });
    }
  }

  return {
    updateGroup,
    loading,
  };
}
