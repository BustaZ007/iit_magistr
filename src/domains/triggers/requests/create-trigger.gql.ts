import { gql } from '@apollo/client';
import { TTrigger } from './get-triggers.gql';

type TCreateTrigger = {
  createProfileGroupTrigger: {
    ok: boolean;
    trigger: TTrigger;
  };
};

const CREATE_TRIGGER = gql`
  mutation CreateTrigger(
    $profileGroupId: ID!
    $title: String
    $endpointIds: [ID!]
  ) {
    createProfileGroupTrigger(
      profileGroupId: $profileGroupId
      title: $title
      endpointIds: $endpointIds
    ) {
      trigger {
        id
        title
        creationDate
        lastModified
        endpoints {
          id
        }
      }
      ok
    }
  }
`;

export { CREATE_TRIGGER, type TCreateTrigger };
