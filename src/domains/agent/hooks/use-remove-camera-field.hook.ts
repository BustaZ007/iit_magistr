import { useTranslation } from 'react-i18next';
import { useCustomMutation, dev } from '@3divi/shared-components';
import {
  GET_CAMERAS_FIELDS,
  REMOVE_CAMERA_FIELD,
  TRemoveCameraField,
} from '../requests';

export function useRemoveCameraField() {
  const { t } = useTranslation('components');
  const [removeCameraFieldRequest, { loading, error }] =
    useCustomMutation<TRemoveCameraField>(REMOVE_CAMERA_FIELD, {
      loadingToast: t(`Modal.ManageField.Delete.Loading`),
      successToast: t(`Modal.ManageField.Delete.Success`),
      errorToast: t(`Modal.ManageField.Delete.Error`),
    });

  const removeCameraField = (fieldName: string) => {
    removeCameraFieldRequest({
      variables: { name: fieldName },
      refetchQueries: [GET_CAMERAS_FIELDS],
    }).catch((err) => dev.log('Remove camera field', err));
  };

  return { removeCameraField, loading, error };
}
