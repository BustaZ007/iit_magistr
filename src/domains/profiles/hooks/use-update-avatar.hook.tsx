import { useToast } from '@chakra-ui/react';
import { LoadingToast, useCustomMutation } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
  UPDATE_PERSON_AVATAR,
  TUpdatePersonAvatarResult,
  CREATE_SAMPLE,
  TCreateSampleResult,
} from '../requests';

const useUpdateAvatar = () => {
  const { t } = useTranslation('pages');
  const toast = useToast({
    position: 'top',
    isClosable: true,
    duration: 3000,
  });

  const onCompleted = (data: TUpdatePersonAvatarResult) => {
    if (data.updateProfile.ok) {
      toast({
        title: t(`Profiles.UpdatedAvatar`),
        status: 'success',
      });
    }
  };
  const [createSampleRequest, { loading: sampleLoading, error: sampleError }] =
    useCustomMutation<TCreateSampleResult>(CREATE_SAMPLE);
  const [
    updatePersonAvatarRequest,
    { loading: updateLoading, error: updateError },
  ] = useCustomMutation<TUpdatePersonAvatarResult>(UPDATE_PERSON_AVATAR, {
    onCompleted,
  });

  const loading = sampleLoading || updateLoading;

  const updateAvatar = async (avatarBase64: string, personId: string) => {
    const createSampleResult = await createSampleRequest({
      variables: { image: avatarBase64 },
    });

    const avatarId = createSampleResult.data?.createSample[0].id ?? '';

    if (avatarId) {
      updatePersonAvatarRequest({
        variables: { personId, avatarId },
      });
    }
  };

  useEffect(() => {
    if (loading && !toast.isActive('updatingAvatar')) {
      toast({
        id: 'updatingAvatar',
        status: 'info',
        isClosable: false,
        duration: null,
        render: () => <LoadingToast title={t('Profiles.UpdatingAvatar')} />,
      });
    }
    if (!loading) {
      toast.close('updatingAvatar');
    }

    if (sampleError) {
      toast({
        title: t(`components:errors.${sampleError.message}`),
        status: 'error',
      });
      return;
    }
    if (updateError) {
      toast({
        title: t(`components:errors.${updateError.message}`),
        status: 'error',
      });
    }
  }, [updateError, sampleError, loading]);

  return { loading, updateAvatar };
};

export { useUpdateAvatar };
