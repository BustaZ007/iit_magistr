import { gql } from '@apollo/client';

export type ResetPasswordInput = {
  userId: string;
  confirmationToken: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type TResetPasswordResult = {
  resetPassword: {
    ok: boolean;
  };
};

const RESET_PASSWORD = gql`
  mutation ResetPassword($userInfo: ResetPasswordInput!) {
    resetPassword(userInfo: $userInfo) {
      ok
    }
  }
`;

export { RESET_PASSWORD };
