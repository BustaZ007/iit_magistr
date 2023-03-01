import { gql } from '@apollo/client';

type TDeleteTrigger = {
  deleteTrigger: {
    ok: boolean;
  };
};

const DELETE_TRIGGER = gql`
  mutation DeleteTrigger($triggerId: ID!) {
    deleteTrigger(triggerId: $triggerId) {
      ok
    }
  }
`;

export { DELETE_TRIGGER, type TDeleteTrigger };
