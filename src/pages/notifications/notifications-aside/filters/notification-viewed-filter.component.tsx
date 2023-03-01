import { useTranslation } from 'react-i18next';
import { FiltersSearchParamsNames } from '../../../../consts';
import {
  TRadioOrCheckboxOption,
  RadioOrCheckboxFilters,
} from '../../../../elements';

function NotificationViewedFilter(): JSX.Element {
  const { t } = useTranslation('pages');

  const options: TRadioOrCheckboxOption[] = [
    { value: 'all', label: t('Notifications.Aside.Filters.All') },
    { value: 'true', label: t('Notifications.Aside.Filters.Viewed') },
    { value: 'false', label: t('Notifications.Aside.Filters.NotViewed') },
  ];

  return (
    <RadioOrCheckboxFilters
      id={FiltersSearchParamsNames.IS_VIEWED_NOTIFICATION}
      label={t('Notifications.Aside.Filters.Statuses')}
      options={options}
    />
  );
}

export default NotificationViewedFilter;
