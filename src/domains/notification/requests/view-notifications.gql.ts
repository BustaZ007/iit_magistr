import { gql } from '@apollo/client';

export type TViewNotificationsOutput = {
  viewingNotifications: {
    ok: boolean;
  };
};

const VIEW_NOTIFICATION = gql`
  mutation ViewNotifications($notificationIds: [String!]!) {
    viewingNotifications(notificationIds: $notificationIds) {
      ok
    }
  }
`;

export default VIEW_NOTIFICATION;
