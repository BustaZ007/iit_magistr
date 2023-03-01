import { useTranslation } from 'react-i18next';
import { FiltersSearchParamsNames } from '../../../../consts';
import {
  TRadioOrCheckboxOption,
  RadioOrCheckboxFilters,
} from '../../../../elements';

function NotificationEndpointsFilter(): JSX.Element {
  const { t } = useTranslation('pages');
  const options: TRadioOrCheckboxOption[] = [
    {
      value: 'all',
      label: t('Notifications.Aside.Filters.EndpointsSending.All'),
    },
    {
      value: 'true',
      label: t('Notifications.Aside.Filters.EndpointsSending.Send'),
    },
    {
      value: 'false',
      label: t('Notifications.Aside.Filters.EndpointsSending.NotSend'),
    },
  ];

  return (
    <RadioOrCheckboxFilters
      id={FiltersSearchParamsNames.IS_SENT_NOTIFICATION}
      label={t('Notifications.Aside.Filters.EndpointsSending.Title')}
      options={options}
    />
  );
}

export default NotificationEndpointsFilter;
