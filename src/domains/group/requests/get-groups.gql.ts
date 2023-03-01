import { gql } from '@apollo/client';
import { TGroup } from './get-group-by-id.gql';

type TColor = {
  color: string;
};

type TGroupsList = {
  items: {
    totalCount: number;
    collectionItems?: TGroup[];
  };
};

const GET_GROUPS = gql`
  query GetGroups(
    $offset: Int
    $filter: JSONString
    $limit: Int
    $ids: [ID] = null
    $order: [String] = null
    $withItems: Boolean! = false
  ) {
    items: profileGroups(
      offset: $offset
      filter: $filter
      limit: $limit
      ids: $ids
      order: $order
    ) {
      totalCount
      collectionItems @include(if: $withItems) {
        id
        title
        info
        creationDate
        lastModified
      }
    }
  }
`;

export { GET_GROUPS, type TGroupsList, type TColor };
