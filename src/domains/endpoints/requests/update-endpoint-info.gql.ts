import { gql } from '@apollo/client';

type TUpdateEndpointInfoResult = {
  updateEndpoint: {
    ok: boolean;
  };
};

const UPDATE_ENDPOINT_INFO = gql`
  mutation UpdateEndpointInfo($id: ID!, $endpointInfo: JSONString!) {
    updateEndpoint(endpointId: $id, endpointInfo: $endpointInfo) {
      ok
    }
  }
`;

export { UPDATE_ENDPOINT_INFO, type TUpdateEndpointInfoResult };
