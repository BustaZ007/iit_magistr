import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  GET_PROFILES_FIELDS,
  GET_PROFILES_LIST,
  REMOVE_PROFILES_FIELD,
} from '../requests';

const useRemoveProfilesField = () => {
  const { t } = useTranslation('components');
  const [removeProfilesFieldRequest, { loading }] = useCustomMutation(
    REMOVE_PROFILES_FIELD,
    {
      loadingToast: t(`Modal.ManageField.Delete.Loading`),
      successToast: t(`Modal.ManageField.Delete.Success`),
      errorToast: t(`Modal.ManageField.Delete.Error`),
    }
  );

  const removeProfilesField = (name: string) => {
    removeProfilesFieldRequest({
      variables: { name },
      refetchQueries: [GET_PROFILES_FIELDS, GET_PROFILES_LIST],
    });
  };
  return { removeProfilesField, loading };
};

export { useRemoveProfilesField };
