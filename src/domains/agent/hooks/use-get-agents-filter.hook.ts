import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames, FilterStatuses } from '../../../consts';

function useGetAgentsFilter() {
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get(FiltersSearchParamsNames.AGENT_STATUS);
  const agentTitle = searchParams.get(FiltersSearchParamsNames.TITLE);
  const order = searchParams.get(FiltersSearchParamsNames.SORT);

  const filter = {
    ...(currentFilter === FilterStatuses.stopped
      ? { info__status: FilterStatuses.inactive }
      : !!currentFilter && { info__status: currentFilter }),
    ...(!!currentFilter && {
      info__last_active_time__isnull: currentFilter === FilterStatuses.inactive,
    }),
    ...(!!agentTitle && { info__title: agentTitle }),
  };

  return { order, filter: JSON.stringify(filter) };
}

export { useGetAgentsFilter };
