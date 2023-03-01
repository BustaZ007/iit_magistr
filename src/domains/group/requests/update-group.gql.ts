import { gql } from '@apollo/client';

export type TUpdateGroupOutput = {
  updateProfileGroupInfo: {
    ok: boolean;
    profileGroup: {
      id: string;
      title: string;
      info: string;
    };
  };
};

export const UPDATE_GROUP = gql`
  mutation UpdateGroup(
    $profileGroupId: ID!
    $profileGroupData: ProfileGroupModifyInput!
  ) {
    updateProfileGroupInfo(
      profileGroupId: $profileGroupId
      profileGroupData: $profileGroupData
    ) {
      ok
      profileGroup {
        id
        title
        info
      }
    }
  }
`;
