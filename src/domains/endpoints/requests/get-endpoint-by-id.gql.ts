import { gql } from '@apollo/client';

type TSingleEndpoint = {
  id: string;
  meta: string;
  type: string;
};

type TGetEndpointByIdResult = {
  endpoints: {
    collectionItems: TSingleEndpoint[];
  };
};

const GET_ENDPOINT_BY_ID = gql`
  query GetEndpointById($id: ID!) {
    endpoints(ids: [$id]) {
      collectionItems {
        id
        meta
        type
      }
    }
  }
`;

export {
  GET_ENDPOINT_BY_ID,
  type TGetEndpointByIdResult,
  type TSingleEndpoint,
};
