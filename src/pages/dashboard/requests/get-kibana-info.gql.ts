import { gql } from '@apollo/client';

export type TKibanaURLs = {
  retail: string;
  advertising: string;
};

export type TKibanaInfo = {
  analytics: TKibanaURLs;
};

const GET_KIBANA_INFO = gql`
  query GetKibanaInfo {
    analytics {
      retail
      advertising
    }
  }
`;

export default GET_KIBANA_INFO;
