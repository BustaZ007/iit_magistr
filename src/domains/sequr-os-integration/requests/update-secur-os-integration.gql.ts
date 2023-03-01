import { gql } from '@apollo/client';

export type TUpdateSecurOsIntegratiionResponse = {
  ok: boolean;
  integration: {
    login: string;
    url: string;
  };
};

export const UPDATE_SECUR_OS_INTEGRATION = gql`
  mutation UpdateSecurOsIntegration(
    $password: String!
    $login: String!
    $url: String!
  ) {
    securosUpdateIntegration(
      integrationInput: { password: $password, login: $login, url: $url }
    ) {
      integration {
        login
        url
      }
      ok
    }
  }
`;
