import { useTranslation } from 'react-i18next';
import { FilterInput } from '../../../../elements';

function FiltersName() {
  const { t } = useTranslation('components');

  return <FilterInput id="title" label={t('Filters.Title')} />;
}

export default FiltersName;
