import { gql } from '@apollo/client';
import { TEndpoint } from './get-endpoints.gql';

type TCreateWebHookEndpointOutput = {
  createWebhookEndpoint: {
    ok: boolean;
    endpoint: TEndpoint;
  };
};

const CREATE_WEBHOOK_ENDPOINT = gql`
  mutation CreateWebHookEndpoint(
    $url: String!
    $requestMethod: String = "GET"
  ) {
    createWebhookEndpoint(
      endpointData: { url: $url, requestMethod: $requestMethod }
    ) {
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

export { CREATE_WEBHOOK_ENDPOINT, type TCreateWebHookEndpointOutput };
