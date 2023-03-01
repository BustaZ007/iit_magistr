import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { formatNumber } from '@3divi/shared-components';
import ActivitiesAside from './activities-aside';
import { Page, RefetchControl } from '../../elements';
import {
  useGetActivitiesAdditionalInfo,
  useGetActivitiesFilters,
  useGetActivitiesSinceDate,
} from '../../domains/activity/hooks';
import { useChangePolling, useGetPaginatedItems } from '../../hooks';
import { GET_ACTIVITIES, TActivitiesItem } from '../../domains/activity';
import { PaginationLimits } from '../../consts';
import { pollingDateVar } from '../../providers/apollo-client';
import ActivitiesTableRowsCollection from './components';
import { TableHeader } from '../../elements/table';

const ActivitiesTableHeaderTitles = [
  'Activities.Table.Photos',
  'common:Agent',
  '',
  '',
  'Activities.Table.Date',
];

function ActivitiesPage() {
  const { t } = useTranslation('pages');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const { filter, order } = useGetActivitiesFilters();
  const pollingDate = useReactiveVar(pollingDateVar);
  const { setStartDate } = useChangePolling('activities', [GET_ACTIVITIES]);
  const {
    items: activities,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TActivitiesItem>(GET_ACTIVITIES, {
    order,
    filter,
    limit: PaginationLimits.ACTIVITIES,
    isPolling: !pollingDate.activities,
  });
  const { agentsInformation, loading: activitiesInfoLoading } =
    useGetActivitiesAdditionalInfo(activities);

  const { updatesCount } = useGetActivitiesSinceDate();

  return (
    <>
      <Page
        templateColumns="max-content minmax(170px, 1fr) max-content max-content auto"
        buttons={
          <RefetchControl
            isPolling={!pollingDate.activities}
            entity="activities"
            queries={[GET_ACTIVITIES]}
            justifyContent="flex-end"
            px={6}
            py={2}
          />
        }
        updatesCounter={
          !!pollingDate.activities && updatesCount ? (
            <Button
              h={8}
              w="full"
              variant="ghost"
              onClick={setStartDate}
              textAlign="center"
              borderRadius="none"
              fontWeight="normal"
              gridColumn={`1 / ${ActivitiesTableHeaderTitles.length + 1}`}
              borderBottom="1px"
              borderColor={borderColor}
            >
              {t('Activities.UpdatesCount', {
                updatesCount: formatNumber(updatesCount),
              })}
            </Button>
          ) : null
        }
        header={<TableHeader titles={ActivitiesTableHeaderTitles} />}
        body={
          <ActivitiesTableRowsCollection
            activities={activities}
            agentsInformation={agentsInformation}
          />
        }
        loading={loading || activitiesInfoLoading}
        pagination={pagination}
        totalCount={totalCount}
        noItemsTitle={t('Activities.NoItems')}
        noItemsTitleWithFilters={t(`Activities.NoFilterItems`)}
      />
      <ActivitiesAside />
    </>
  );
}

export default ActivitiesPage;
