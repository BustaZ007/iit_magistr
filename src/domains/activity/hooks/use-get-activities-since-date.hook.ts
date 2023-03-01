import { useReactiveVar } from '@apollo/client';
import { useCustomQuery } from '@3divi/shared-components';
import { pollingDateVar } from '../../../providers/apollo-client';
import { GET_ACTIVITIES, TActivities } from '../request';
import useGetActivitiesFilters from './use-get-activities-filters.hook';

function useGetActivitiesSinceDate() {
  const pollingDate = useReactiveVar(pollingDateVar);
  const { filter } = useGetActivitiesFilters();

  const { data } = useCustomQuery<TActivities>(GET_ACTIVITIES, {
    variables: {
      filter: {
        ...filter,
        creationDate: {
          gt: filter.creationDate?.gt || pollingDate.activities,
          lt: undefined,
        },
      },
      limit: 0,
      withItems: false,
    },
    isPolling: true,
  });
  const updatesCount = data?.items.totalCount ?? 0;

  return { updatesCount };
}

export default useGetActivitiesSinceDate;
