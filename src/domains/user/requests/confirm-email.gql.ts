import { gql } from '@apollo/client';

export type ConfirmationInput = {
  userId: string;
  confirmationToken: string;
};

const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($userInfo: ConfirmationInput!) {
    confirm(userInfo: $userInfo) {
      ok
    }
  }
`;

export { CONFIRM_EMAIL };
