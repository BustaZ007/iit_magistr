import { useCustomMutation } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import { GET_ACTIVITIES } from '../../activity';

import {
  CREATE_PROFILE_BY_ACTIVITY_ID,
  TProfileByActivityId,
} from '../requests';

function useCreateProfileByActivityId(activityId: string) {
  const { t } = useTranslation('pages');
  const [createProfileByActivityReq, { loading }] =
    useCustomMutation<TProfileByActivityId>(CREATE_PROFILE_BY_ACTIVITY_ID, {
      loadingToast: t('Profiles.Creating'),
      successToast: t('Profiles.Created'),
      errorToast: t('Profiles.ErrorCreating'),
    });

  const createProfileByActivity = () => {
    createProfileByActivityReq({
      variables: {
        id: activityId,
      },
      refetchQueries: [GET_ACTIVITIES],
    });
  };

  return {
    createProfileByActivity,
    loading,
  };
}

export { useCreateProfileByActivityId };
