import { useTranslation } from 'react-i18next';
import { FilterInput } from '../../../../../elements';

function WatchlistTitleFilter(): JSX.Element {
  const { t } = useTranslation('pages');

  return (
    <FilterInput
      id="watchlistTitle"
      label={t('Notifications.Aside.Filters.WatchlistTitle')}
    />
  );
}

export default WatchlistTitleFilter;
