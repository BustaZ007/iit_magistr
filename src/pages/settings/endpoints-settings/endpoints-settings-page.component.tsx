import { useTranslation } from 'react-i18next';
import {
  GET_ENDPOINTS,
  TEndpoint,
  useGetEndpointsFilters,
} from '../../../domains/endpoints';
import { TableHeader } from '../../../elements/table';
import EndpointTableRow from './components/endpoints-table-row.component';
import { useGetPaginatedItems } from '../../../hooks';
import { PaginationLimits } from '../../../consts';
import { Page } from '../../../elements';

function EndpointsSettingsPage() {
  const { t } = useTranslation('pages');
  const EndpointsTableHeaderTitles = [
    t('Settings.Endpoints.Type.Title'),
    t('Settings.Endpoints.Type.Destination'),
    t('Settings.Endpoints.CreationDate'),
  ];
  const { order, filter } = useGetEndpointsFilters();
  const {
    items: endpoints,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TEndpoint>(GET_ENDPOINTS, {
    order,
    filter,
    limit: PaginationLimits.ENDPOINTS,
  });

  return (
    <Page
      templateColumns="max-content minmax(128px, 1fr) auto"
      header={<TableHeader titles={EndpointsTableHeaderTitles} />}
      body={endpoints?.map((endpoint) => (
        <EndpointTableRow endpoint={endpoint} key={endpoint.id} />
      ))}
      loading={loading}
      pagination={pagination}
      totalCount={totalCount}
      noItemsTitle={t('Settings.Endpoints.NoItems')}
      noItemsTitleWithFilters={t(`Settings.Endpoints.NoFilterItems`)}
    />
  );
}

export default EndpointsSettingsPage;
