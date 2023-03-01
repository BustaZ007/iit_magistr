import { gql } from '@apollo/client';

type TPlatformInformation = {
  platformVersion: string;
};

type TGetPlatformInformation = {
  platformInformation: TPlatformInformation;
};

const GET_PLATFORM_INFORMATION = gql`
  query GetPlatformInformation {
    platformInformation {
      platformVersion
    }
  }
`;

export {
  GET_PLATFORM_INFORMATION,
  type TPlatformInformation,
  type TGetPlatformInformation,
};
