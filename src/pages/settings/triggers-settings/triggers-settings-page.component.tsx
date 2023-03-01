import { useTranslation } from 'react-i18next';
import {
  GET_TRIGGERS,
  TTrigger,
  useGetTriggersFilters,
} from '../../../domains/triggers';
import { TableHeader } from '../../../elements/table';
import { TriggerTableRow } from './components';
import { useGetPaginatedItems } from '../../../hooks';
import { PaginationLimits } from '../../../consts';
import { Page } from '../../../elements';

function TriggersSettingsPage() {
  const { t } = useTranslation('pages');
  const TriggersTableHeaderTitles = [
    t('Settings.Triggers.Table.Title'),
    t('Settings.Triggers.Table.EndpointsCount'),
    t('Settings.Triggers.Table.CreationDate'),
  ];
  const { filter, order } = useGetTriggersFilters();
  const {
    items: triggers,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TTrigger>(GET_TRIGGERS, {
    filter,
    order,
    limit: PaginationLimits.TRIGGERS,
  });

  return (
    <Page
      templateColumns="minmax(250px, 1fr) max-content auto"
      header={<TableHeader titles={TriggersTableHeaderTitles} />}
      body={triggers?.map((trigger) => (
        <TriggerTableRow trigger={trigger} key={trigger.id} />
      ))}
      loading={loading}
      pagination={pagination}
      totalCount={totalCount}
      noItemsTitle={t('Settings.Triggers.NoItems')}
      noItemsTitleWithFilters={t(`Settings.Triggers.NoFilterItems`)}
    />
  );
}

export default TriggersSettingsPage;
