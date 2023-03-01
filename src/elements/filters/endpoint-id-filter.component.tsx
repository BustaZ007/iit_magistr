import { useTranslation } from 'react-i18next';
import FilterInput from './filter-input.component';

function EndpointIdFilter(): JSX.Element {
  const { t } = useTranslation('components');

  return <FilterInput id="endpointId" label={t('Filters.EndpointId')} />;
}

export default EndpointIdFilter;
