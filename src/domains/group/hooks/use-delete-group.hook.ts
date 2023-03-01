import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { PATHNAMES } from '../../../consts';
import { DELETE_GROUP, GET_GROUPS, TDeleteGroupOutput } from '../requests';
import { GET_PROFILES_LIST } from '../../profiles';
import { GET_TRIGGERS } from '../../triggers';

export const useDeleteGroup = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('components');
  const [deleteGroupReq, { loading, error }] =
    useCustomMutation<TDeleteGroupOutput>(DELETE_GROUP, {
      loadingToast: t('Groups.Events.Deleting'),
      successToast: t('Groups.Events.SuccessDeleted'),
      errorToast: t('Groups.Events.ErrorDeleted'),
    });

  const deleteGroup = async (id: string, shouldNavigate?: boolean) => {
    const response = await deleteGroupReq({
      variables: {
        groupIds: [id],
      },
      refetchQueries: [GET_GROUPS, GET_PROFILES_LIST, GET_TRIGGERS],
    });
    if (response.data?.deleteProfileGroup.ok) {
      if (shouldNavigate) navigate(PATHNAMES.persons);
    }
  };

  return { deleteGroup, error, loading };
};
