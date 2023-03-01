import { gql } from '@apollo/client';

const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation SendResetPasswordEmail($email: String!) {
    sendResetPasswordEmail(email: $email) {
      ok
    }
  }
`;

export { SEND_RESET_PASSWORD_EMAIL };
