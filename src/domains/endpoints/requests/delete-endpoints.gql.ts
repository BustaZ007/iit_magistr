import { gql } from '@apollo/client';

type TDeleteEndpointsResult = {
  deleteEndpoint: {
    ok: boolean;
  };
};

const DELETE_ENDPOINTS = gql`
  mutation DeleteEndpoints($ids: [String!]!) {
    deleteEndpoint(endpointIds: $ids) {
      ok
    }
  }
`;

export { DELETE_ENDPOINTS, type TDeleteEndpointsResult };
