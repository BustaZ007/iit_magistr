import { useSearchParams } from 'react-router-dom';

import { FiltersSearchParamsNames, FilterStatuses } from '../../../consts';

function useFilterIsActive(title: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get(FiltersSearchParamsNames.AGENT_STATUS)
    ? searchParams.get(FiltersSearchParamsNames.AGENT_STATUS) === title
    : title === FilterStatuses.all;

  const setGroup = () => {
    if (title === FilterStatuses.all) {
      searchParams.delete(FiltersSearchParamsNames.AGENT_STATUS);
      setSearchParams(searchParams.toString(), { replace: true });
      return;
    }
    searchParams.set(FiltersSearchParamsNames.AGENT_STATUS, title);
    setSearchParams(searchParams.toString(), { replace: true });
  };

  return { isActive, setGroup };
}

export default useFilterIsActive;
