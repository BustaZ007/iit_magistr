import { useTranslation } from 'react-i18next';
import NotificationCreationDateFilter from './filters/date-filters/notification-creation-date-filter.component';
import { FiltersBlock } from '../../../blocks';
import {
  EndpointIdFilter,
  FilterSelect,
  ModificationDateFilter,
  NotificationIdFilter,
  PersonIdFilter,
  TriggerIdFilter,
} from '../../../elements';
import NotificationViewedFilter from './filters/notification-viewed-filter.component';
import NotificationEndpointsFilter from './filters/notification-endpoints-filter.component';
import NotificationActiveFilter from './filters/notification-active-filter.component';
import { FiltersSearchParamsNames } from '../../../consts';

function NotificationsFilters() {
  const { t } = useTranslation('pages');
  return (
    <FiltersBlock>
      <FilterSelect
        title={FiltersSearchParamsNames.SORT}
        defaultValue="all"
        fields={[
          '-creationDate',
          'creationDate',
          '-lastModified',
          'lastModified',
        ]}
        label={t('components:Filters.Sort')}
      />
      <NotificationActiveFilter />
      <NotificationEndpointsFilter />
      <NotificationViewedFilter />
      <NotificationIdFilter />
      <PersonIdFilter />
      <TriggerIdFilter />
      <EndpointIdFilter />
      {/* <WatchlistTitleFilter /> */}
      <NotificationCreationDateFilter />
      <ModificationDateFilter />
    </FiltersBlock>
  );
}

export default NotificationsFilters;
