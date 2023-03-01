import { useTranslation } from 'react-i18next';
import { FiltersBlock } from '../../../../blocks';
import { FilterSelect, FiltersName } from '../../../../elements';
import FiltersStatus from './filters.status.component';
import { FiltersSearchParamsNames } from '../../../../consts';

function AgentsSettingsFilters() {
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
          '-info__title',
          'info__title',
        ]}
        label={t('Filters.Sort')}
      />
      <FiltersStatus />
      <FiltersName />
    </FiltersBlock>
  );
}

export default AgentsSettingsFilters;
