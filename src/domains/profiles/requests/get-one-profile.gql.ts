import { gql } from '@apollo/client';
import { TActivitiesData } from '../../activity';
import { TGroup } from '../../group';

type TProfileInfo = {
  age: string;
  gender: string;
  description: string;
  name: string;
  birthday: string;
  [key: string]: string;
};

type TActivityInfo = {
  bestShotId: string;
  id: string;
  cameraId: string;
  creationDate: string;
  profileId: string | null;
  data: TActivitiesData;
};

type TProfileFullInfo = {
  id: string;
  lastModified: string;
  creationDate: string;
  activitiesCount: number;
  profileGroups: TGroup[];
  info: TProfileInfo;
  avatar: string;
  mainSample: {
    id: string;
  };
};

type TOneProfileFullInfo = {
  profiles: {
    collectionItems: TProfileFullInfo[];
  };
  activities: {
    collectionItems: TActivityInfo[];
  };
};

const GET_ONE_PROFILE = gql`
  query GetOneProfile($id: [ID]!, $profileId: UUID) {
    profiles(ids: $id) {
      collectionItems {
        id
        lastModified
        creationDate
        activitiesCount
        info
        avatar
        mainSample {
          id
        }
        profileGroups {
          id
          info
          title
        }
      }
    }
    activities(
      pagination: { limit: 8 }
      filters: { profileId: $profileId }
      order: { creationDate: DESC }
    ) {
      collectionItems {
        bestShotId
        id
        cameraId
        creationDate
        profileId
        data
      }
    }
  }
`;

export {
  GET_ONE_PROFILE,
  type TActivityInfo,
  type TOneProfileFullInfo,
  type TProfileFullInfo,
  type TProfileInfo,
};
