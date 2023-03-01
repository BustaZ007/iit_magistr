import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
  INACTIVE_USER_ERROR,
  useCustomMutation,
} from '@3divi/shared-components';
import {
  ADD_PROFILES_FIELD,
  GET_PROFILES_FIELDS,
  GET_PROFILES_LIST,
  TAddProfilesField,
} from '../requests';

const useCreateProfilesField = () => {
  const { t } = useTranslation('components');
  const toast = useToast({
    position: 'top',
    isClosable: true,
    duration: 3000,
  });
  const [createProfilesFieldRequest, { error }] =
    useCustomMutation<TAddProfilesField>(ADD_PROFILES_FIELD, {
      loadingToast: t(`Modal.CreateField.Loading`),
      successToast: t(`Modal.CreateField.Success`),
    });

  const createProfilesField = async (name: string, callback?: () => void) => {
    const createProfilesFieldResult = await createProfilesFieldRequest({
      variables: { name },
      refetchQueries: [GET_PROFILES_FIELDS, GET_PROFILES_LIST],
    });

    if (createProfilesFieldResult.data?.addProfilesField.ok && callback)
      callback();
  };

  useEffect(() => {
    if (error && error.message !== INACTIVE_USER_ERROR) {
      toast({
        title: `${t(`errors.${error.message}`)}`,
        status: 'error',
      });
    }
  }, [error]);

  return { createProfilesField };
};
export { useCreateProfilesField };
