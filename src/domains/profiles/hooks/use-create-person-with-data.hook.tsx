import {
  INACTIVE_USER_ERROR,
  useCustomMutation,
} from '@3divi/shared-components';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CREATE_PERSON_WITH_DATA, TCreatePersonWithData } from '../requests';

type TPersonInfo = {
  gender: string;
  description: string;
  name: string;
  birthday: string;
  [key: string]: string | string[] | undefined;
};

type TProfileFields = {
  name: string;
  value: string | string[] | undefined;
};

const useCreatePersonWithData = () => {
  const { t } = useTranslation('pages');
  const toast = useToast({
    position: 'top',
    isClosable: true,
    duration: 3000,
  });
  const [createPersonRequest, { loading, error }] =
    useCustomMutation<TCreatePersonWithData>(CREATE_PERSON_WITH_DATA, {
      loadingToast: t('Profiles.Creating'),
      successToast: t('Profiles.Created'),
    });

  const createPersonWithData = async (
    image: string,
    profileGroupIds: string[],
    fields: TProfileFields[],
    successCallback?: () => void
  ) => {
    const createPersonResult = await createPersonRequest({
      variables: { image: image || null, fields, profileGroupIds },
    });

    if (
      createPersonResult.data?.createProfile.ok &&
      createPersonResult.data?.createProfile.isCreated
    ) {
      if (successCallback) successCallback();
    }
  };

  useEffect(() => {
    if (error && error.message !== INACTIVE_USER_ERROR) {
      toast({
        title: `${t(`components:errors.${error.message}`)}`,
        status: 'error',
      });
    }
  }, [error]);

  return { loading, createPersonWithData };
};

export { useCreatePersonWithData, type TPersonInfo };
