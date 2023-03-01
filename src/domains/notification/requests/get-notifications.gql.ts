import { gql } from '@apollo/client';

type TEndpointStatus = {
  endpoint: { type: string };
  status: string;
};

type TNotificationInfo = {
  id: string;
  creationDate: string;
  avatarId: string;
  realtimeFacePhotoId: string;
  realtimeBodyPhotoId: string;
  profileId: string;
  description: string;
  profileGroupColor: string;
  profileGroupTitle: string;
  triggerId: string;
  cameraTitle: string;
  endpointStatuses: TEndpointStatus[];
  isViewed: boolean;
  name: string | null;
};

type TNotificationsList = {
  items: {
    totalCount: number;
    collectionItems?: TNotificationInfo[];
  };
};

const GET_NOTIFICATIONS = gql`
  query GetNotifications(
    $order: NotificationOrdering
    $offset: Int
    $limit: Int
    $filter: NotificationFilter
    $withItems: Boolean!
  ) {
    items: notifications(
      pagination: { offset: $offset, limit: $limit }
      order: $order
      filters: $filter
    ) {
      totalCount
      collectionItems @include(if: $withItems) {
        id
        creationDate
        avatarId
        realtimeFacePhotoId
        realtimeBodyPhotoId
        profileId
        description
        profileGroupColor
        profileGroupTitle
        triggerId
        cameraTitle
        name
        endpointStatuses {
          endpoint {
            type
          }
          status
        }
        isViewed
      }
    }
  }
`;

export {
  GET_NOTIFICATIONS,
  type TNotificationsList,
  type TNotificationInfo,
  type TEndpointStatus,
};
