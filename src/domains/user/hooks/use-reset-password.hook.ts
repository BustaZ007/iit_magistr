import { useNavigate } from 'react-router-dom';
import { useCustomMutation } from '@3divi/shared-components';
import {
  ResetPasswordInput,
  RESET_PASSWORD,
  TResetPasswordResult,
} from '../requests';
import { PATHNAMES } from '../../../consts';

const useResetPassword = () => {
  const navigate = useNavigate();
  const [resetPasswordRequest, { loading, error }] =
    useCustomMutation<TResetPasswordResult>(RESET_PASSWORD);

  const resetPassword = async (userInfo: ResetPasswordInput) => {
    const response = await resetPasswordRequest({
      variables: {
        userInfo,
      },
    });
    if (response?.data?.resetPassword?.ok) {
      navigate(`${PATHNAMES.recovery_new_success}?changeSuccess=true`);
    }
  };

  return {
    loading,
    resetPassword,
    error,
  };
};

export { useResetPassword };
