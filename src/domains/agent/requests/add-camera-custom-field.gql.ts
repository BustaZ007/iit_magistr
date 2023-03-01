import { gql } from '@apollo/client';

export type TAddCamerField = {
  addCamerasField: { ok: boolean };
};

export const ADD_CAMERA_FIELD = gql`
  mutation AddCamerasField($name: String!) {
    addCamerasField(fieldInput: { name: $name }) {
      ok
    }
  }
`;
