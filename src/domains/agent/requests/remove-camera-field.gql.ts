import { gql } from '@apollo/client';

export type TRemoveCameraField = {
  removeCamerasField: string[];
};

export const REMOVE_CAMERA_FIELD = gql`
  mutation RemoveCamerasField($name: String!) {
    removeCamerasField(fieldInput: { name: $name }) {
      ok
    }
  }
`;
