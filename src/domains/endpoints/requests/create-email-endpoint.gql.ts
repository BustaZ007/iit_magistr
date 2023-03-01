import { gql } from '@apollo/client';
import { TEndpoint } from './get-endpoints.gql';

type TCreateEmailEndpoint = {
  createEmailEndpoint: {
    ok: boolean;
    endpoint: TEndpoint;
  };
};

const CREATE_EMAIL_ENDPOINT = gql`
  mutation CreateEmailEndpoint($targetEmail: String!) {
    createEmailEndpoint(endpointData: { targetEmail: $targetEmail }) {
      ok
      endpoint {
        id
        type
        creationDate
        lastModified
        meta
      }
    }
  }
`;

export { CREATE_EMAIL_ENDPOINT, type TCreateEmailEndpoint };
