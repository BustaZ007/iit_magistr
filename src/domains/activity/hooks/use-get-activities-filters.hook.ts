import { useReactiveVar } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames } from '../../../consts';
import { pollingDateVar } from '../../../providers/apollo-client';

type TActivitiesFilter = {
  creationDate?: { lt?: string | null; gt?: string | null };
  lastModified?: { lt?: string | null; gt?: string | null };
  profileId?: string | null;
};

const useGetActivitiesFilters = () => {
  const [searchParams] = useSearchParams();
  const pollingDate = useReactiveVar(pollingDateVar);

  let order = null;

  const creationStartDate = searchParams.get(
    FiltersSearchParamsNames.CREATION_START_DATE
  );

  const creationEndDate = searchParams.get(
    FiltersSearchParamsNames.CREATION_END_DATE
  );

  const modifyStartDate = searchParams.get(
    FiltersSearchParamsNames.MODIFY_START_DATE
  );

  const modifyEndDate = searchParams.get(
    FiltersSearchParamsNames.MODIFY_END_DATE
  );

  const profileId = searchParams.get(FiltersSearchParamsNames.PERSON_ID);
  let filter: TActivitiesFilter = {
    creationDate: { gt: creationStartDate, lt: creationEndDate },
    lastModified: { gt: modifyStartDate, lt: modifyEndDate },
    profileId,
  };

  if (pollingDate.activities) {
    filter = {
      ...filter,
      creationDate: {
        lt: pollingDate.activities,
      },
    };
  }

  if (searchParams.has(FiltersSearchParamsNames.SORT)) {
    const param = searchParams.get(FiltersSearchParamsNames.SORT);
    const lastModified = searchParams
      .get(FiltersSearchParamsNames.SORT)
      ?.indexOf('lastModified');

    if (lastModified !== -1 && param) {
      order = {
        lastModified: param[0] === '-' ? 'DESC' : 'ASC',
      };
    } else if (param)
      order = { creationDate: param[0] === '-' ? 'DESC' : 'ASC' };
  }

  return { filter, order };
};

export default useGetActivitiesFilters;
