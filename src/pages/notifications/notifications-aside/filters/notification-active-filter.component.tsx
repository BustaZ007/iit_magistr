import { useTranslation } from 'react-i18next';
import { FiltersSearchParamsNames } from '../../../../consts';
import {
  TRadioOrCheckboxOption,
  RadioOrCheckboxFilters,
} from '../../../../elements';

function NotificationActiveFilter(): JSX.Element {
  const { t } = useTranslation('pages');
  const options: TRadioOrCheckboxOption[] = [
    {
      value: 'all',
      label: t('Notifications.Aside.Filters.ActiveNotification.All'),
    },
    {
      value: 'true',
      label: t('Notifications.Aside.Filters.ActiveNotification.Active'),
    },
    {
      value: 'false',
      label: t('Notifications.Aside.Filters.ActiveNotification.Inactive'),
    },
  ];

  return (
    <RadioOrCheckboxFilters
      id={FiltersSearchParamsNames.IS_ACTIVE_NOTIFICATION}
      label={t('Notifications.Aside.Filters.ActiveNotification.Title')}
      options={options}
    />
  );
}

export default NotificationActiveFilter;
