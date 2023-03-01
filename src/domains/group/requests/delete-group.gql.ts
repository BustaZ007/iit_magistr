import { gql } from '@apollo/client';

export type TDeleteGroupOutput = {
  deleteProfileGroup: {
    ok: boolean;
  };
};

export const DELETE_GROUP = gql`
  mutation deleteGroup($groupIds: [ID!]!) {
    deleteProfileGroup(groupIds: $groupIds) {
      ok
    }
  }
`;
