import { useTranslation } from 'react-i18next';
import FilterDatePicker from './filter-date-picker.component';

function CreationDateFilter(): JSX.Element {
  const { t } = useTranslation('components');

  return <FilterDatePicker type="creation" label={t('Filters.CreationDate')} />;
}

export default CreationDateFilter;
