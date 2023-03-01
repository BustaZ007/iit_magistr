import { useReactiveVar } from '@apollo/client';
import { Flex, HStack, Spacer } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import {
  GET_NOTIFICATIONS,
  GET_UNREAD_NOTIFICATION_COUNT,
} from '../../../../domains/notification';
import { ChangeViewButtons, RefetchControl } from '../../../../elements';
import { pollingDateVar } from '../../../../providers/apollo-client';
import ViewAllNotificationsButton from './view-all-notifications-button';

type TNotificationsPageButtons = {
  contentView: string;
  setContentView: Dispatch<SetStateAction<string>>;
  totalCount: number;
};

function NotificationsPageButtons({
  contentView,
  setContentView,
  totalCount,
}: TNotificationsPageButtons) {
  const pollingDate = useReactiveVar(pollingDateVar);

  return (
    <Flex justifyContent="space-between" px={6} py={2} align="center">
      {totalCount ? <ViewAllNotificationsButton /> : <Spacer />}
      <HStack spacing={18}>
        <RefetchControl
          isPolling={!pollingDate.notifications}
          entity="notifications"
          queries={[GET_NOTIFICATIONS, GET_UNREAD_NOTIFICATION_COUNT]}
          justifyContent="flex-end"
        />
        <ChangeViewButtons
          name="notifications"
          currentView={contentView}
          setCurrentView={setContentView}
        />
      </HStack>
    </Flex>
  );
}

export default NotificationsPageButtons;
