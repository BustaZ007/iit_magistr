import { useTranslation } from 'react-i18next';
import { FilterDatePicker } from '../../../../../elements';

function NotificaitonCreationDateFilter(): JSX.Element {
  const { t } = useTranslation('pages');

  return (
    <FilterDatePicker
      type="creation"
      label={t('Notifications.Aside.Filters.CreationDatepicker')}
    />
  );
}

export default NotificaitonCreationDateFilter;
