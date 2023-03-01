import { gql } from '@apollo/client';

type TGroup = {
  id: string;
  title: string;
  info: {
    color: string;
  };
  creationDate: string;
  lastModified: string;
};

type TGetGroupById = {
  profileGroups: {
    collectionItems: TGroup[];
  };
};

const GET_GROUP_BY_ID = gql`
  query GetGroupById(
    $offset: Int
    $filter: JSONString
    $limit: Int
    $ids: [ID]!
  ) {
    profileGroups(offset: $offset, filter: $filter, limit: $limit, ids: $ids) {
      collectionItems {
        id
        title
        info
        creationDate
        lastModified
      }
    }
  }
`;

export { GET_GROUP_BY_ID, type TGetGroupById, type TGroup };
