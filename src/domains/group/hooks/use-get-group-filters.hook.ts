import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames } from '../../../consts';

function useGetGroupsFilters() {
  const [searchParams] = useSearchParams();

  let filter = {};
  let ids = null;

  if (searchParams.get(FiltersSearchParamsNames.TITLE)) {
    filter = {
      title: searchParams.get(FiltersSearchParamsNames.TITLE),
    };
  }

  if (searchParams.get(FiltersSearchParamsNames.COLOR)) {
    filter = {
      ...filter,
      info__color__in: searchParams
        .get(FiltersSearchParamsNames.COLOR)
        ?.split(','),
    };
  }

  if (searchParams.get(FiltersSearchParamsNames.PERSON_ID)) {
    filter = {
      ...filter,
      profiles: searchParams.get(FiltersSearchParamsNames.PERSON_ID),
    };
  }

  if (searchParams.get(FiltersSearchParamsNames.GROUPS_IDS)) {
    ids = searchParams.get(FiltersSearchParamsNames.GROUPS_IDS)?.split('\n');
  }

  return { filter: JSON.stringify(filter), ids };
}

export { useGetGroupsFilters };
