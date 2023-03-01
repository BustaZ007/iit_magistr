import { useCustomMutation } from '@3divi/shared-components';
import { useNavigate } from 'react-router-dom';
import { PATHNAMES } from '../../../consts';
import { SEND_RESET_PASSWORD_EMAIL } from '../requests';

type TResetPasswordData = {
  sendResetPasswordEmail: {
    ok: boolean;
  };
};

const useSendResetPassword = () => {
  const navigate = useNavigate();
  const [resetPasswordRequest, { loading, error }] =
    useCustomMutation<TResetPasswordData>(SEND_RESET_PASSWORD_EMAIL);

  const resetPassword = async (email: string) => {
    const response = await resetPasswordRequest({
      variables: {
        email,
      },
    });
    if (response?.data?.sendResetPasswordEmail?.ok) {
      navigate(`${PATHNAMES.recovery_success}?email=${email}`);
    }
  };

  return {
    loading,
    resetPassword,
    error,
  };
};

export { useSendResetPassword };
