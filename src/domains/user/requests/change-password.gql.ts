import { gql } from '@apollo/client';

export type ChangePasswordInput = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type TChangePasswordResult = {
  changePassword: {
    ok: boolean;
  };
};

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($userInfo: ChangePasswordInput!) {
    changePassword(userInfo: $userInfo) {
      ok
    }
  }
`;

export { CHANGE_PASSWORD };
