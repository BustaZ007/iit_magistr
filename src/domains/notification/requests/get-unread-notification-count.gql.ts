import { gql } from '@apollo/client';

type TUnreadNotification = {
  id: string;
};

type TGetActiveNotificationResponse = {
  notifications: {
    collectionItems: TUnreadNotification[];
  };
};

const GET_UNREAD_NOTIFICATION_COUNT = gql`
  query GetUnreadNotificationCount(
    $endpointId: UUID
    $startDate: DateTime
    $endDate: DateTime
  ) {
    notifications(
      filters: {
        isViewed: false
        endpointId: $endpointId
        creationDate: { gt: $startDate, lt: $endDate }
      }
      order: { creationDate: DESC }
    ) {
      collectionItems {
        id
      }
    }
  }
`;

export {
  GET_UNREAD_NOTIFICATION_COUNT,
  type TGetActiveNotificationResponse,
  type TUnreadNotification,
};
