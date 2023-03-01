import { gql } from '@apollo/client';
import { TGroup } from './get-group-by-id.gql';

export type TCreateGroupOutput = {
  createProfileGroup: {
    ok: boolean;
    profileGroup: TGroup;
  };
};

export const CREATE_GROUP = gql`
  mutation CreateGroup($profileGroupData: ProfileGroupInput!) {
    createProfileGroup(profileGroupData: $profileGroupData) {
      ok
      profileGroup {
        id
        title
        info
        creationDate
        lastModified
      }
    }
  }
`;
