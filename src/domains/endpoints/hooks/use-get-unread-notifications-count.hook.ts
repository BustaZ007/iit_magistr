import { useReactiveVar, WatchQueryFetchPolicy } from '@apollo/client';
import { useCustomQuery } from '@3divi/shared-components';
import { pollingDateVar } from '../../../providers/apollo-client';
import {
  GET_NOTIFICATIONS_ENDPOINT_ID,
  TNotificationsEndpoint,
} from '../requests';
import {
  GET_UNREAD_NOTIFICATION_COUNT,
  TGetActiveNotificationResponse,
} from '../../notification';

export function useGetUnreadNotificationsCount(
  fetchPolicy: WatchQueryFetchPolicy
) {
  const pollingDate = useReactiveVar(pollingDateVar);
  const { data: endpointData } = useCustomQuery<TNotificationsEndpoint>(
    GET_NOTIFICATIONS_ENDPOINT_ID,
    { fetchPolicy: 'cache-and-network' }
  );

  const endpointId = endpointData?.endpoints.collectionItems[0]?.id ?? null;

  const { data, loading } = useCustomQuery<TGetActiveNotificationResponse>(
    GET_UNREAD_NOTIFICATION_COUNT,
    {
      fetchPolicy,
      variables: { endpointId, startDate: pollingDate.notifications },
      isPolling: !pollingDate.notifications,
    }
  );

  const notificationsCount = data?.notifications.collectionItems.length ?? 0;
  return { notificationsCount, loading, endpointId };
}
