import { gql } from '@apollo/client';

type TEndpointId = {
  id: string;
};

export type TNotificationsEndpoint = {
  endpoints: {
    collectionItems: TEndpointId[];
  };
};

const GET_NOTIFICATIONS_ENDPOINT_ID = gql`
  query GetWebInterfaceEndpointId {
    endpoints(filter: { meta__default_alias: "web_interface" }) {
      collectionItems {
        id
      }
    }
  }
`;

export { GET_NOTIFICATIONS_ENDPOINT_ID };
