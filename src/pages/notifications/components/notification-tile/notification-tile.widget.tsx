import { Box, Divider, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { TNotificationInfo } from '../../../../domains/notification';
import NotificationComment from './notification-comment.widget';
import NotificationDateTime from './notification-date-time.widget';
import NotificationImages from './notification-images.widgets';
import NotificationTriggerName from './notification-trigger-name.widget';

type TNotificationTile = {
  notification: TNotificationInfo;
};

function NotificationTile({ notification }: TNotificationTile): JSX.Element {
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <Box overflow="hidden" bg={bg} borderRadius="sm">
      <NotificationTriggerName notification={notification} />
      <NotificationImages
        avatar={notification.avatarId}
        realtimeFacePhotoId={notification.realtimeFacePhotoId}
        realtimeBodyPhotoId={notification.realtimeBodyPhotoId}
      />
      <Stack py={2} borderWidth="1px">
        <Text px={4} noOfLines={1} wordBreak="break-all" fontSize="sm" pb={0.5}>
          {notification.cameraTitle}
        </Text>
        <Divider />
        <Stack py={1} px={4}>
          {notification.name && (
            <Text fontWeight="semibold" noOfLines={1} wordBreak="break-all">
              {notification.name}
            </Text>
          )}

          <NotificationComment
            description={notification.description}
            notificationId={notification.id}
            profileId={notification.profileId}
            isViewed={notification.isViewed}
          />
        </Stack>
        <NotificationDateTime creationDate={notification.creationDate} />
      </Stack>
    </Box>
  );
}

export default NotificationTile;
