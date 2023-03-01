import VIEW_NOTIFICATION, {
  TViewNotificationsOutput,
} from './view-notifications.gql';
import MARK_ALL_AS_VIEWED, {
  TMarkAllAsViewedOutput,
} from './mark-all-as-viewed.gql';

import {
  GET_NOTIFICATIONS,
  TNotificationsList,
  TNotificationInfo,
  TEndpointStatus,
} from './get-notifications.gql';
import {
  GET_UNREAD_NOTIFICATION_COUNT,
  TGetActiveNotificationResponse,
  TUnreadNotification,
} from './get-unread-notification-count.gql';

export {
  VIEW_NOTIFICATION,
  MARK_ALL_AS_VIEWED,
  GET_NOTIFICATIONS,
  GET_UNREAD_NOTIFICATION_COUNT,
  type TGetActiveNotificationResponse,
  type TUnreadNotification,
  type TNotificationsList,
  type TNotificationInfo,
  type TEndpointStatus,
  type TViewNotificationsOutput,
  type TMarkAllAsViewedOutput,
};
