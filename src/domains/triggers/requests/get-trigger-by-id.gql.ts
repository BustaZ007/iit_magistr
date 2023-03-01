import { gql } from '@apollo/client';
import { TTrigger } from './get-triggers.gql';

type TGetTriggerById = {
  triggers: {
    collectionItems: TTrigger[];
  };
};

const GET_TRIGGER_BY_ID = gql`
  query GetTriggerById($id: ID!) {
    triggers(ids: [$id]) {
      collectionItems {
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

export { GET_TRIGGER_BY_ID, type TGetTriggerById };
