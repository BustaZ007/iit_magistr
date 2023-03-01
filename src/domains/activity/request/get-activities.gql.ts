import { gql } from '@apollo/client';

type TActivitiesProcess = {
  id: string;
  type: string;
  object: {
    id: string;
    class: string;
  };
  ['$best_shot']?: {
    id: string;
  };
  parent?: string;
  ['numerical_id']?: number;
  ['time_interval']: [string, string];
};

type TActivitiesData = {
  processes: TActivitiesProcess[];
};

type TActivitiesItem = {
  bestShotId: string;
  id: string;
  cameraId: string;
  creationDate: string;
  profileId: string | null;
  data: TActivitiesData;
  status: string;
};

type TActivities = {
  items: {
    totalCount: number;
    collectionItems?: TActivitiesItem[];
  };
};

const GET_ACTIVITIES = gql`
  query GetActivities(
    $offset: Int
    $limit: Int
    $filter: ActivityFilter
    $order: ActivityOrdering
    $withItems: Boolean!
  ) {
    items: activities(
      pagination: { offset: $offset, limit: $limit }
      order: $order
      filters: $filter
    ) {
      totalCount
      collectionItems @include(if: $withItems) {
        bestShotId
        cameraId
        id
        creationDate
        profileId
        data
        status
      }
    }
  }
`;

export {
  GET_ACTIVITIES,
  type TActivities,
  type TActivitiesItem,
  type TActivitiesData,
  type TActivitiesProcess,
};
