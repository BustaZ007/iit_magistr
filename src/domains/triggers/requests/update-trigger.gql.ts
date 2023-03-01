import { gql } from '@apollo/client';
import { TTrigger } from './get-triggers.gql';

type TUpdateTrigger = {
  updateTrigger: {
    ok: boolean;
    trigger: TTrigger;
  };
};

const UPDATE_TRIGGER = gql`
  mutation UpdateTrigger($triggerId: ID!, $title: String, $endpointIds: [ID!]) {
    updateTrigger(
      triggerId: $triggerId
      title: $title
      endpointIds: $endpointIds
    ) {
      ok
      trigger {
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

export { UPDATE_TRIGGER, type TUpdateTrigger };
