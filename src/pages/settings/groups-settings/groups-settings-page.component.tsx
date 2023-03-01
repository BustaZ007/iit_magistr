import { useTranslation } from 'react-i18next';
import { FileDotted } from 'phosphor-react';
import {
  GET_GROUPS,
  TGroup,
  useGetGroupsFilters,
} from '../../../domains/group';
import { Page } from '../../../elements';
import { useGetPaginatedItems } from '../../../hooks';
import { PaginationLimits } from '../../../consts';
import { GroupsTableRow } from './components';
import { TableHeader } from '../../../elements/table';

const GroupsTableHeaderTitles = [
  'Settings.Groups.Color',
  'Settings.Groups.TableTitle',
  'Settings.Groups.CreationDate',
];

function GroupsSettingsPage() {
  const { t } = useTranslation('pages');
  const { filter, ids } = useGetGroupsFilters();
  const {
    items: groups,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TGroup>(GET_GROUPS, {
    order: null,
    filter,
    limit: PaginationLimits.GROUPS,
    variables: { ids },
  });

  return (
    <Page
      templateColumns="max-content minmax(250px, 1fr) auto"
      header={<TableHeader titles={GroupsTableHeaderTitles} />}
      body={groups?.map((group) => (
        <GroupsTableRow group={group} key={group.id} />
      ))}
      loading={loading}
      pagination={pagination}
      totalCount={totalCount}
      noItemsTitle={t('Settings.Groups.NoItems')}
      noItemsTitleWithFilters={t(`Settings.Groups.NoFilterItems`)}
      noItemsIcon={FileDotted}
    />
  );
}

export default GroupsSettingsPage;
