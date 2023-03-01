import { useTranslation } from 'react-i18next';
import { FiltersBlock } from '../../../blocks';
import {
  CreationDateFilter,
  FilterSelect,
  ModificationDateFilter,
  PersonIdFilter,
} from '../../../elements';
import { FiltersSearchParamsNames } from '../../../consts';

function AsideFilters() {
  const { t } = useTranslation('components');
  return (
    <FiltersBlock>
      <FilterSelect
        title={FiltersSearchParamsNames.SORT}
        defaultValue="all"
        fields={[
          '-creationDate',
          'creationDate',
          '-lastModified',
          'lastModified',
        ]}
        label={t('Filters.Sort')}
      />
      <PersonIdFilter />
      <CreationDateFilter />
      <ModificationDateFilter />
    </FiltersBlock>
  );
}

export default AsideFilters;
