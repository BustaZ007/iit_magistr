import { useTranslation } from 'react-i18next';
import FilterInput from './filter-input.component';

function NotificationIdFilter() {
  const { t } = useTranslation('components');

  return (
    <FilterInput id="notificationId" label={t('Filters.NotificationId')} />
  );
}

export default NotificationIdFilter;
