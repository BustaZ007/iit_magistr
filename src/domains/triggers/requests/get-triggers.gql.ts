import { gql } from '@apollo/client';
import { TEndpoint } from '../../endpoints';

type TTrigger = {
  id: string;
  creationDate: string;
  lastModified: string;
  title: string;
  endpoints: TEndpoint[];
};

type TGetTriggers = {
  items: {
    totalCount: number;
    collectionItems?: TTrigger[];
  };
};

const GET_TRIGGERS = gql`
  query GetTriggers(
    $offset: Int
    $filter: JSONString
    $order: [String]
    $limit: Int
    $targetId: ID
    $withItems: Boolean!
  ) {
    items: triggers(
      offset: $offset
      filter: $filter
      limit: $limit
      targetId: $targetId
      order: $order
    ) {
      totalCount
      collectionItems @include(if: $withItems) {
        id
        creationDate
        lastModified
        title
        endpoints {
          id
          type
          creationDate
          lastModified
          meta
        }
      }
    }
  }
`;

export { GET_TRIGGERS, type TGetTriggers, type TTrigger };
