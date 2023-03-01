import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  ADD_CAMERA_FIELD,
  GET_CAMERAS_FIELDS,
  TAddCamerField,
} from '../requests';

export function useAddCameraField(shouldShowStatus?: boolean) {
  const { t } = useTranslation('components');
  const [addCameraFieldRequest, { loading, error }] =
    useCustomMutation<TAddCamerField>(ADD_CAMERA_FIELD, {
      loadingToast: shouldShowStatus
        ? t('Modal.CreateField.Loading')
        : undefined,
      successToast: shouldShowStatus
        ? t('Modal.CreateField.Success')
        : undefined,
      errorToast: shouldShowStatus ? t('Modal.CreateField.Error') : undefined,
    });

  const addCameraField = async (fieldName: string, callback?: () => void) => {
    const addCamerasFieldResult = await addCameraFieldRequest({
      variables: { name: fieldName },
      refetchQueries: [GET_CAMERAS_FIELDS],
    });

    if (addCamerasFieldResult.data?.addCamerasField.ok && callback) {
      callback();
    }
  };

  return { addCameraField, loading, error };
}
