import { useCustomQuery } from '@3divi/shared-components';
import { useReactiveVar } from '@apollo/client';
import { pollingDateVar } from '../../../providers/apollo-client';
import { GET_NOTIFICATIONS, TNotificationsList } from '../requests';
import useFilterNotifications from './use-filter-notifications.hook';

function useGetNotificationsCountSinceDate() {
  const pollingDate = useReactiveVar(pollingDateVar);
  const { filters: filter } = useFilterNotifications();

  const { data } = useCustomQuery<TNotificationsList>(GET_NOTIFICATIONS, {
    variables: {
      filter: {
        ...filter,
        creationDate: { gt: pollingDate.notifications, lt: undefined },
      },
      withItems: false,
      limit: 0,
    },
    isPolling: !!pollingDate.notifications,
  });

  const updatesCount = data?.items.totalCount ?? 0;

  return { updatesCount };
}

export default useGetNotificationsCountSinceDate;
