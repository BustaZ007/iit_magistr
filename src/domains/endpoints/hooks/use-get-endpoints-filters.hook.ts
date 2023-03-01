import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames } from '../../../consts';

const EndpointTypes: { [key: string]: string } = {
  WebInterface: 'WI',
  Email: 'EM',
  Webhook: 'WH',
};

const useGetEndpointsFilters = () => {
  const [searchParams] = useSearchParams();
  let filter = null;
  const order = searchParams.get(FiltersSearchParamsNames.SORT);

  if (searchParams.has(FiltersSearchParamsNames.ENDPOINT_ID)) {
    filter = { id: searchParams.get(FiltersSearchParamsNames.ENDPOINT_ID) };
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

  if (searchParams.has(FiltersSearchParamsNames.TRIGGER_ID)) {
    filter = {
      ...filter,
      triggers: searchParams.get(FiltersSearchParamsNames.TRIGGER_ID),
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.TYPE)) {
    filter = {
      ...filter,
      type__in: searchParams
        .get(FiltersSearchParamsNames.TYPE)
        ?.split(',')
        .map((type) => EndpointTypes[type]),
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.METHOD)) {
    filter = {
      ...filter,
      meta__method: searchParams.get(FiltersSearchParamsNames.METHOD),
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.URL)) {
    filter = {
      ...filter,
      meta__url: searchParams.get(FiltersSearchParamsNames.URL),
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.EMAIL)) {
    filter = {
      ...filter,
      meta__target_email: searchParams.get(FiltersSearchParamsNames.EMAIL),
    };
  }

  return { filter: JSON.stringify(filter), order };
};

export { useGetEndpointsFilters };
