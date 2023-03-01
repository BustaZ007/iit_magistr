import { useCustomMutation } from '@3divi/shared-components';
import { ConfirmationInput, CONFIRM_EMAIL } from '../requests';

const useConfirmEmail = () => {
  const [confirmEmailRequest, { loading, error }] =
    useCustomMutation(CONFIRM_EMAIL);

  const confirmEmail = async (userInfo: ConfirmationInput) => {
    await confirmEmailRequest({
      variables: {
        userInfo,
      },
    });
  };

  return {
    loading,
    confirmEmail,
    error,
  };
};

export { useConfirmEmail };
