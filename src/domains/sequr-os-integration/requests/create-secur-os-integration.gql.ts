import { gql } from '@apollo/client';

export type TCreateIntegrationResponse = {
  ok: boolean;
};

export const CREATE_SECUR_OS_INTEGRATION = gql`
  mutation CreateSecurOsIntegration(
    $login: String!
    $password: String!
    $url: String!
  ) {
    securosCreateIntegration(
      integrationInput: { login: $login, password: $password, url: $url }
    ) {
      ok
    }
  }
`;
