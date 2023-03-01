import { useReactiveVar } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames } from '../../../consts';
import { pollingDateVar } from '../../../providers/apollo-client';

function useGetProfileFilters() {
  const [searchParams] = useSearchParams();
  const pollingDate = useReactiveVar(pollingDateVar);

  const hasAvatar = searchParams.get(FiltersSearchParamsNames.MY_PERSON);
  const age = searchParams.get(FiltersSearchParamsNames.AGE);
  const gender = searchParams.get(FiltersSearchParamsNames.GENDER);
  const name = searchParams.get(FiltersSearchParamsNames.NAME);
  const description = searchParams.get(FiltersSearchParamsNames.DESCRIPTION);
  const groupId = searchParams.get(FiltersSearchParamsNames.GROUP);
  const sort =
    searchParams.get(FiltersSearchParamsNames.SORT) ?? 'creationDate';
  const ids = searchParams.get(FiltersSearchParamsNames.IDS)?.split(',');
  const groupsIds = searchParams.get(FiltersSearchParamsNames.GROUPS_IDS);

  const filters = {
    info__avatar_id__isnull: hasAvatar ? hasAvatar === 'false' : undefined,
    info__age: age ? Number(age) : undefined,
    info__gender: gender ?? undefined,
    info__name: name ?? undefined,
    info__description: description ?? undefined,
    profile_groups__id: groupId ?? undefined,
    profile_groups__id__in: groupsIds?.split(',') ?? undefined,
    creation_date__lte: pollingDate.persons ?? undefined,
  };

  return {
    ids,
    filters,
    order: sort,
  };
}

export { useGetProfileFilters };
