import { gql } from '@apollo/client';

type TCollectorSettings = {
  cameraFields: string[];
  id: string;
};

type TGetCamerasFields = {
  collectorSettings: TCollectorSettings;
};

const GET_CAMERAS_FIELDS = gql`
  query GetCamerasFields {
    collectorSettings {
      cameraFields
      id
    }
  }
`;

export { GET_CAMERAS_FIELDS, type TCollectorSettings, type TGetCamerasFields };
