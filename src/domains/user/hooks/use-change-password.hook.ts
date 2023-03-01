import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  ChangePasswordInput,
  CHANGE_PASSWORD,
  TChangePasswordResult,
} from '../requests';

const useChangePassword = (onClose: () => void) => {
  const { t } = useTranslation('components');
  const [changePasswordRequest, { loading, error }] =
    useCustomMutation<TChangePasswordResult>(CHANGE_PASSWORD, {
      successToast: t('Modal.ChangePassword.SuccessTitle'),
      loadingToast: t('Modal.ChangePassword.LoadingTitle'),
      onCompleted: onClose,
    });

  const changePassword = async (userInfo: ChangePasswordInput) => {
    await changePasswordRequest({
      variables: { userInfo },
    });
  };

  return {
    loading,
    changePassword,
    error,
  };
};

export { useChangePassword };
