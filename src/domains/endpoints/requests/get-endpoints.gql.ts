/* eslint-disable camelcase */
import { gql } from '@apollo/client';

type TEndpointMeta = {
  target_email?: string;
  url?: string;
  method?: string;
};

type TEndpoint = {
  id: string;
  type: string;
  creationDate: string;
  lastModified: string;
  meta: string;
};

type TGetEndpointsResult = {
  items: {
    totalCount: number;
    collectionItems?: TEndpoint[];
  };
};

const GET_ENDPOINTS = gql`
  query GetEndpoints(
    $filter: JSONString
    $ids: [ID]
    $limit: Int
    $offset: Int
    $order: [String]
    $withArchived: WithArchived = null
    $withItems: Boolean!
  ) {
    items: endpoints(
      filter: $filter
      ids: $ids
      limit: $limit
      offset: $offset
      order: $order
      withArchived: $withArchived
    ) {
      totalCount
      collectionItems @include(if: $withItems) {
        id
        type
        creationDate
        lastModified
        meta
      }
    }
  }
`;

export {
  GET_ENDPOINTS,
  type TGetEndpointsResult,
  type TEndpoint,
  type TEndpointMeta,
};
