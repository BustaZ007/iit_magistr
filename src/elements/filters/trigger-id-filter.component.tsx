import { useTranslation } from 'react-i18next';
import FilterInput from './filter-input.component';

function TriggerIdFilter(): JSX.Element {
  const { t } = useTranslation('components');

  return <FilterInput id="triggerId" label={t('Filters.TriggerId')} />;
}

export default TriggerIdFilter;
