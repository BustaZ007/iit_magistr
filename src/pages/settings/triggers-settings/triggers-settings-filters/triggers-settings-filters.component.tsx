import { useTranslation } from 'react-i18next';
import { FiltersBlock } from '../../../../blocks';
import { FiltersSearchParamsNames } from '../../../../consts';
import {
  EndpointIdFilter,
  FilterDatePicker,
  FilterSelect,
  TriggerIdFilter,
} from '../../../../elements';

function TriggersSettingsFilters() {
  const { t } = useTranslation('components');

  return (
    <FiltersBlock>
      <FilterSelect
        title={FiltersSearchParamsNames.SORT}
        defaultValue="all"
        fields={[
          '-creation_date',
          'creation_date',
          '-last_modified',
          'last_modified',
          '-title',
          'title',
        ]}
        label={t('Filters.Sort')}
      />
      <TriggerIdFilter />
      <EndpointIdFilter />
      <FilterDatePicker label={t('Filters.CreationDate')} type="creation" />
      <FilterDatePicker label={t('Filters.ModifyDate')} type="modify" />
    </FiltersBlock>
  );
}

export default TriggersSettingsFilters;
