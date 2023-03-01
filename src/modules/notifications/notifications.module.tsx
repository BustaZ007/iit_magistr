/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { dev } from '@3divi/shared-components';
import { useLazyQuery } from '@apollo/client';
import {
  Button,
  Portal,
  Stack,
  IconButton,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import { X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import useWebSocket from 'react-use-websocket';
import { PaginationLimits, PATHNAMES } from '../../consts';
import {
  GET_NOTIFICATIONS,
  TNotificationInfo,
  TNotificationsList,
} from '../../domains/notification';
// import { getWebSocketUrl } from '../../helpers';
import { Notification } from './elements';

function Notifications() {
  const btnBg = useColorModeValue('blackAlpha.100', undefined);
  const btnHoverBg = useColorModeValue('blackAlpha.200', undefined);
  const { t } = useTranslation('components');
  const [notifications, setNotifications] = useState<TNotificationInfo[]>([]);
  const [activeNotifications, setActiveNotifications] = useState<
    TNotificationInfo[]
  >([]);

  const [getNotifications, { data: allNotifications }] =
    useLazyQuery<TNotificationsList>(GET_NOTIFICATIONS, {
      variables: {
        withItems: true,
        limit: PaginationLimits.SYSTEM_NOTIFICATIONS,
        order: { creationDate: 'DESC' },
      },
    });

  useEffect(() => {
    const interval = setInterval(() => {
      getNotifications({
        fetchPolicy: 'no-cache',
        variables: {
          filter: {
            isViewed: false,
            creationDate: {
              gt: moment()
                .utc()
                .subtract(30, 'seconds')
                .format('YYYY-MM-DDTHH:mm:ss'),
            },
          },
        },
      }).catch((e) => dev.log('Pulling pop-up notifications', e));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (allNotifications?.items.collectionItems) {
      setNotifications(allNotifications.items.collectionItems);
    }
  }, [allNotifications]);

  // const { lastJsonMessage } = useWebSocket(
  //   `${getWebSocketUrl()}/ws/notifications/`
  // );

  // useEffect(() => {
  //   const notification = lastJsonMessage as TNotificationInfo;
  //   if (lastJsonMessage) {
  //     setNotifications([
  //       ...notifications.filter(
  //         (filteredNotification) => filteredNotification.id !== notification.id
  //       ),
  //       notification,
  //     ]);
  //   }
  // }, [lastJsonMessage]);

  useEffect(() => {
    setActiveNotifications([
      ...notifications.slice(0, PaginationLimits.PUSH_NOTIFICATIONS),
    ]);
  }, [notifications]);

  const closeAllNotifications = () => {
    getNotifications({
      variables: {
        filter: {
          isViewed: false,
          creationDate: {
            gt: moment().utc().format('YYYY-MM-DDTHH:mm:ss'),
          },
        },
      },
    }).catch((e) => dev.log('Close all pop-up notifications', e));
  };

  return (
    <Portal>
      <Stack position="fixed" right={0} bottom={0} p={4} alignItems="flex-end">
        {activeNotifications.length > PaginationLimits.PUSH_NOTIFICATIONS && (
          <IconButton
            isRound
            aria-label={t('Notifications.CloseAll')}
            icon={<Icon as={X} w={4} h={4} />}
            size="sm"
            onClick={closeAllNotifications}
            bg={btnBg}
            _hover={{
              bg: btnHoverBg,
            }}
          />
        )}
        {activeNotifications.map((notification) => (
          <Notification key={notification.id} notification={notification} />
        ))}
        {notifications.length > PaginationLimits.PUSH_NOTIFICATIONS && (
          <Button
            as={Link}
            size="sm"
            to={PATHNAMES.notifications}
            bg={btnBg}
            _hover={{
              bg: btnHoverBg,
            }}
            w="full"
          >
            {t('Notifications.ShowMore', {
              count: notifications.length - activeNotifications.length,
            })}
          </Button>
        )}
      </Stack>
    </Portal>
  );
}

export default Notifications;
