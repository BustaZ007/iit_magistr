/* eslint-disable no-underscore-dangle */
import { useCustomMutation } from '@3divi/shared-components';
import {
  GET_NOTIFICATIONS,
  GET_UNREAD_NOTIFICATION_COUNT,
  VIEW_NOTIFICATION,
} from '../requests';

const useViewNotification = () => {
  const [viewNotificationRequest, { loading, error }] =
    useCustomMutation(VIEW_NOTIFICATION);
  const viewNotification = async (id: string) => {
    await viewNotificationRequest({
      variables: {
        notificationIds: [id],
      },
      refetchQueries: [GET_NOTIFICATIONS, GET_UNREAD_NOTIFICATION_COUNT],
      optimisticResponse: {
        viewingNotifications: {
          ok: true,
        },
        __typename: 'MutationResult',
      },
    });
  };

  return {
    loading,
    viewNotification,
    error,
  };
};

export default useViewNotification;
