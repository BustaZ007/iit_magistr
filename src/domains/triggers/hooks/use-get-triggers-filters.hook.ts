import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames } from '../../../consts';

const useGetTriggersFilters = () => {
  const [searchParams] = useSearchParams();
  let filter = null;
  const order = searchParams.get(FiltersSearchParamsNames.SORT);

  if (searchParams.has(FiltersSearchParamsNames.TRIGGER_ID)) {
    filter = { id: searchParams.get(FiltersSearchParamsNames.TRIGGER_ID) };
  }

  if (
    searchParams.has(FiltersSearchParamsNames.CREATION_START_DATE) &&
    searchParams.has(FiltersSearchParamsNames.CREATION_END_DATE)
  ) {
    filter = {
      ...filter,
      creation_date__gte: searchParams.get(
        FiltersSearchParamsNames.CREATION_START_DATE
      ),
      creation_date__lte: searchParams.get(
        FiltersSearchParamsNames.CREATION_END_DATE
      ),
    };
  }

  if (
    searchParams.has(FiltersSearchParamsNames.MODIFY_START_DATE) &&
    searchParams.has(FiltersSearchParamsNames.MODIFY_END_DATE)
  ) {
    filter = {
      ...filter,
      last_modified_gte: searchParams.get(
        FiltersSearchParamsNames.MODIFY_START_DATE
      ),
      last_modified_lte: searchParams.get(
        FiltersSearchParamsNames.MODIFY_END_DATE
      ),
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.TRIGGER_TITLE)) {
    filter = {
      title: searchParams.get(FiltersSearchParamsNames.TRIGGER_TITLE),
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.ENDPOINT_ID)) {
    filter = {
      ...filter,
      endpoints: searchParams.get(FiltersSearchParamsNames.ENDPOINT_ID),
    };
  }

  return { filter: JSON.stringify(filter), order };
};

export { useGetTriggersFilters };
