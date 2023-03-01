import { gql } from '@apollo/client';

export type TIntegrationData = {
  id: string;
  url: string;
  login: string;
  lastModified: string;
  creationDate: string;
};

export type TGetSecurOsIntegrations = {
  securosIntegrations: TIntegrationData[];
};

export const GET_SECUR_OS_INTEGRATIONS = gql`
  query GetSecurOsIntegrations {
    securosIntegrations {
      id
      url
      login
      lastModified
      creationDate
    }
  }
`;
