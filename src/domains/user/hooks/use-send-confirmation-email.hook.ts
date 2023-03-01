import { useCustomMutation } from '@3divi/shared-components';
import { SEND_CONFIRMATION_EMAIL } from '../requests';

const useSendConfirmationEmail = () => {
  const [sendConfirmationEmailRequest, { loading, error }] = useCustomMutation(
    SEND_CONFIRMATION_EMAIL
  );

  const sendConfirmationEmail = async (email: string) => {
    await sendConfirmationEmailRequest({
      variables: {
        email,
      },
    });
  };

  return {
    loading,
    sendConfirmationEmail,
    error,
  };
};

export { useSendConfirmationEmail };
