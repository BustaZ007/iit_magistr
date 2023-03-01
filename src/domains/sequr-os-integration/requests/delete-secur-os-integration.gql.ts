import { gql } from '@apollo/client';

export type TDeleteSecurOsIntegrationResponse = {
  ok: boolean;
};

export const DELETE_SECUR_OS_INTEGRATION = gql`
  mutation DeleteSecurOsIntegrations {
    securosRemoveIntegration {
      ok
    }
  }
`;
