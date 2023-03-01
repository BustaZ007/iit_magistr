import { useTranslation } from 'react-i18next';
import FilterInput from './filter-input.component';

function PersonIdFilter(): JSX.Element {
  const { t } = useTranslation('components');

  return <FilterInput id="personId" label={t('Filters.ProfileId')} />;
}

export default PersonIdFilter;
