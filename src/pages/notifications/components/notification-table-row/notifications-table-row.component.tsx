import { HStack, Icon, Text } from '@chakra-ui/react';
import moment from 'moment';
import { CheckCircle } from 'phosphor-react';
import { TNotificationInfo } from '../../../../domains/notification';
import { ProfileImage } from '../../../../elements';
import { TableRow } from '../../../../elements/table';
import NotificationsTableItemGroup from './notifications-table-item-group.component';
import NotificationsTableItemTrigger from './notifications-table-item-trigger.component';
import anonymousLight from '../../../../static/anonymous-light.svg';
import anonymousDark from '../../../../static/anonymous-dark.svg';
import ViewNotificationButton from './view-notification-button.component';

type TNotificationsTableRow = {
  notification: TNotificationInfo;
};

function NotificationsTableRow({ notification }: TNotificationsTableRow) {
  const endpointStatuses = notification?.endpointStatuses ?? [];

  return (
    <TableRow>
      <HStack alignItems="center" spacing="px">
        {notification.realtimeBodyPhotoId && (
          <ProfileImage
            objectFit="contain"
            sampleId={notification.realtimeBodyPhotoId}
            size="64px"
            fallbackDarkSrc={anonymousDark}
            fallbackLightSrc={anonymousLight}
          />
        )}
        {notification.realtimeFacePhotoId && (
          <ProfileImage
            sampleId={notification.realtimeFacePhotoId}
            size="64px"
            fallbackDarkSrc={anonymousDark}
            fallbackLightSrc={anonymousLight}
          />
        )}
        <ProfileImage
          sampleId={notification.avatarId}
          size="64px"
          fallbackDarkSrc={anonymousDark}
          fallbackLightSrc={anonymousLight}
        />
      </HStack>
      <Text noOfLines={1} wordBreak="break-all">
        {notification.name || '-'}
      </Text>
      <NotificationsTableItemGroup
        color={notification.profileGroupColor}
        title={notification.profileGroupTitle}
      />
      {notification.isViewed ? (
        <Icon as={CheckCircle} w="5" h="5" />
      ) : (
        <ViewNotificationButton notificationId={notification.id} />
      )}
      <NotificationsTableItemTrigger endpointStatuses={endpointStatuses} />
      <Text noOfLines={1} wordBreak="break-all">
        {notification.cameraTitle}
      </Text>

      <Text noOfLines={1} wordBreak="break-all">
        {moment(notification.creationDate).format('HH:mm · D MMMM')}
      </Text>
    </TableRow>
  );
}

export default NotificationsTableRow;
