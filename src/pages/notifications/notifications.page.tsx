import { formatNumber } from '@3divi/shared-components';
import { useReactiveVar } from '@apollo/client';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { FileDotted } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PaginationLimits } from '../../consts';
import {
  GET_NOTIFICATIONS,
  TNotificationInfo,
  useFilterNotifications,
  useGetNotificationsCountSinceDate,
} from '../../domains/notification';

import { useChangePolling, useGetPaginatedItems } from '../../hooks';
import { Page } from '../../elements';
import { TableHeader } from '../../elements/table';
import { pollingDateVar } from '../../providers/apollo-client';
import { NotificationsPageButtons, NotificationsTableRow } from './components';
import NotificationsAside from './notifications-aside';
import NotificationTilesList from './components/notification-tile';

const NotificationsTableHeaderTitles = [
  'Notifications.Table.Photos',
  'Notifications.Table.ProfileName',
  'Notifications.Table.Group',
  'Notifications.Table.Viewed',
  'Notifications.Table.Where',
  'common:Agent',
  'Notifications.Table.Date',
];

function NotificationsPage() {
  const { t } = useTranslation('pages');
  const [contentView, setContentView] = useState(
    localStorage.getItem('notifications-content-view') ?? 'table'
  );
  const isTile = contentView === 'tile';
  const pollingDate = useReactiveVar(pollingDateVar);
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const { setStartDate } = useChangePolling('notifications', [
    GET_NOTIFICATIONS,
  ]);

  const { filters: filter, order } = useFilterNotifications();
  const { updatesCount } = useGetNotificationsCountSinceDate();

  const {
    items: notifications,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TNotificationInfo>(GET_NOTIFICATIONS, {
    order,
    filter,
    limit: PaginationLimits.SYSTEM_NOTIFICATIONS,
    isPolling: !pollingDate.notifications,
  });

  return (
    <>
      <Page
        templateColumns={
          isTile
            ? undefined
            : 'max-content minmax(250px, 1fr) minmax(170px, 1fr) minmax(max-content, 1fr) minmax(200px, 1fr) minmax(150px, 1fr) auto'
        }
        buttons={
          <NotificationsPageButtons
            contentView={contentView}
            setContentView={setContentView}
            totalCount={totalCount}
          />
        }
        header={
          !isTile ? (
            <TableHeader titles={NotificationsTableHeaderTitles} />
          ) : null
        }
        updatesCounter={
          pollingDate.notifications && updatesCount ? (
            <Button
              h={8}
              w="full"
              variant="ghost"
              onClick={setStartDate}
              borderRadius="none"
              textAlign="center"
              fontWeight="normal"
              gridColumn={`1 / ${NotificationsTableHeaderTitles.length + 1}`}
              borderBottom="1px"
              borderColor={borderColor}
            >
              {t('Notifications.UpdatesCount', {
                updatesCount: formatNumber(updatesCount),
              })}
            </Button>
          ) : null
        }
        body={
          isTile ? (
            <NotificationTilesList notifications={notifications ?? []} />
          ) : (
            notifications?.map((notification) => (
              <NotificationsTableRow
                key={notification.id}
                notification={notification}
              />
            ))
          )
        }
        gap={isTile ? 8 : undefined}
        loading={loading}
        pagination={pagination}
        totalCount={totalCount}
        noItemsTitle={t(`Notifications.NoItems`)}
        noItemsTitleWithFilters={t(`Notifications.NoFilterItems`)}
        noItemsIcon={FileDotted}
      />
      <NotificationsAside />
    </>
  );
}

export default NotificationsPage;
