import { useTranslation } from 'react-i18next';
import { TableHeader } from '../../../elements/table';
import { GET_AGENTS, TAgent, useGetAgentsFilter } from '../../../domains/agent';
import { AgentTableRow } from './components';
import { useGetPaginatedItems } from '../../../hooks';
import { PaginationLimits } from '../../../consts';
import { Page } from '../../../elements';

function AgentsSettingsPage() {
  const { t } = useTranslation('pages');
  const AgentsTableHeaderTitles = [
    t('Agents.AgentInfo.Status'),
    t('Agents.AgentInfo.Name'),
  ];
  const { filter, order } = useGetAgentsFilter();
  const {
    items: agents,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TAgent>(GET_AGENTS, {
    limit: PaginationLimits.AGENTS,
    filter,
    order,
  });

  return (
    <Page
      templateColumns="max-content auto"
      header={<TableHeader titles={AgentsTableHeaderTitles} />}
      body={agents?.map((agent) => (
        <AgentTableRow agent={agent} key={agent.id} />
      ))}
      loading={loading}
      pagination={pagination}
      totalCount={totalCount}
      noItemsTitle={t('Agents.NoItems')}
      noItemsTitleWithFilters={t(`Agents.NoFilterItems`)}
    />
  );
}

export default AgentsSettingsPage;
