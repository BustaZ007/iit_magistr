import { useCustomMutation } from '@3divi/shared-components';
import {
  MARK_ALL_AS_VIEWED,
  GET_NOTIFICATIONS,
  GET_UNREAD_NOTIFICATION_COUNT,
} from '../requests';

type TNotificationListCache = {
  collectionItems: {
    __ref: string;
  }[];
};

const useViewAllNotifications = () => {
  const [viewAllNotificationsRequest, { loading, error }] =
    useCustomMutation(MARK_ALL_AS_VIEWED);

  const viewAllNotifications = async () => {
    await viewAllNotificationsRequest({
      update: (cache) => {
        cache.modify({
          fields: {
            notifications: (
              notifications: TNotificationListCache,
              { storeFieldName }
            ) => {
              if (!storeFieldName.indexOf('"is_viewed": false'))
                return { ...notifications };

              return {
                collectionItems: [],
              };
            },
          },
        });
      },
      refetchQueries: [GET_NOTIFICATIONS, GET_UNREAD_NOTIFICATION_COUNT],
      optimisticResponse: {
        markAllNotificationsAsViewed: {
          ok: true,
        },
        __typename: 'MutationResult',
      },
    });
  };

  return {
    error,
    loading,
    viewAllNotifications,
  };
};

export { useViewAllNotifications };
