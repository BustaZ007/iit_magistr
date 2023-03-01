import { useTranslation } from 'react-i18next';
import FilterDatePicker from './filter-date-picker.component';

function ModificationDateFilter(): JSX.Element {
  const { t } = useTranslation('components');

  return (
    <FilterDatePicker type="modify" label={t('Filters.ModifyDatepicker')} />
  );
}

export default ModificationDateFilter;
