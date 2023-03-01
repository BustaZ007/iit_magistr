import { useReactiveVar } from '@apollo/client';
import { comparePathname } from '@3divi/shared-components';
import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames, PATHNAMES } from '../../../consts';
import { pollingDateVar } from '../../../providers/apollo-client';

type TFilters = {
  [key: string]: any;
};

type TOrder = {
  [key: string]: any;
};

function useFilterNotifications() {
  const [searchParams] = useSearchParams();
  const pollingDate = useReactiveVar(pollingDateVar);

  const creationStartDateParams = searchParams.get(
    FiltersSearchParamsNames.CREATION_START_DATE
  );

  const creationEndDateParams =
    searchParams.get(FiltersSearchParamsNames.CREATION_END_DATE) ??
    pollingDate.notifications;

  const modifiedStartDateParams = searchParams.get(
    FiltersSearchParamsNames.MODIFY_START_DATE
  );
  const modifiedEndDateParams = searchParams.get(
    FiltersSearchParamsNames.MODIFY_END_DATE
  );

  const notificationId = searchParams.get(
    FiltersSearchParamsNames.NOTIFICATION_ID
  );
  const personId = searchParams.get(FiltersSearchParamsNames.PERSON_ID);
  const triggerId = searchParams.get(FiltersSearchParamsNames.TRIGGER_ID);
  const endpointId = searchParams.get(FiltersSearchParamsNames.ENDPOINT_ID);
  const watchlistTitle = searchParams.get(
    FiltersSearchParamsNames.WATCHLIST_TITLE
  );
  const isActiveNotification = searchParams.get(
    FiltersSearchParamsNames.IS_ACTIVE_NOTIFICATION
  );
  const isSentNotification = searchParams.get(
    FiltersSearchParamsNames.IS_SENT_NOTIFICATION
  );
  const isViewedNotification = searchParams.get(
    FiltersSearchParamsNames.IS_VIEWED_NOTIFICATION
  );

  const sortParams = searchParams.get(FiltersSearchParamsNames.SORT);

  const filters: TFilters = {};
  const order: TOrder = {
    creationDate: 'DESC',
  };

  const isNotificationPage = comparePathname(PATHNAMES.notifications);

  if (isNotificationPage) {
    filters.creationDate = {
      gt: creationStartDateParams,
      lt: creationEndDateParams,
    };
  }

  if (modifiedEndDateParams && modifiedStartDateParams) {
    filters.lastModified = {
      gt: modifiedStartDateParams,
      lt: modifiedEndDateParams,
    };
  }

  if (notificationId) {
    filters.id = {
      iExact: notificationId,
    };
  }

  if (personId) {
    filters.profileId = personId;
  }

  if (triggerId) {
    filters.triggerId = triggerId;
  }

  if (endpointId) {
    filters.endpointId = endpointId;
  }

  if (watchlistTitle) {
    filters.profileGroupTitle = watchlistTitle;
  }

  if (isActiveNotification) {
    filters.isActive = isActiveNotification === 'true';
  }

  if (isSentNotification) {
    filters.isSent = isSentNotification === 'true';
  }

  if (isViewedNotification) {
    filters.isViewed =
      isViewedNotification === 'true' || isViewedNotification === 'all';
  }

  if (sortParams) {
    const type = sortParams?.substring(sortParams.indexOf('-') + 1);
    const direction = sortParams[0] === '-' ? 'DESC' : 'ASC';

    if (type === 'creationDate') {
      order.creationDate = direction;
    } else {
      order.lastModified = direction;
    }
  }

  return { filters, order };
}

export default useFilterNotifications;
